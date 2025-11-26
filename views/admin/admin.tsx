import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  Alert,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase/fireConfig";
import { StoredUsers } from "@/interfaces/user/IUser";
import { initialUserState } from "@/interfaces/constants/initialUserValues";
import CustomText from "@/components/customs/CustomText";
import Separator from "@/components/customs/Separator";
import CustomButton from "@/components/customs/CustomButton";
import { globalColors } from "@/constants/Colors";
import CustomIcon from "@/components/customs/CustomIcon";

/**
 * Admin
 *
 * This component is the main admin panel. It renders a list of all users
 * and provides a form to add new users or edit existing ones.
 *
 * The form is divided into two parts: the first part is for the user's name,
 * email and password, the second part is for the user's role and the switches
 * for the different sections of the app.
 *
 * The component also handles the deletion of users.
 *
 * @returns JSX.Element
 */
const Admin: React.FC = () => {
  const [data, setData] = useState<StoredUsers[]>([]);
  const [loadingMsg, setLoadingMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const isFetched = useRef<boolean>(false);
  const [isUserEditing, setIsUserEditing] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [editedUser, setEditedUser] = useState<StoredUsers | any>(
    initialUserState
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // --- Helpers ---
  const resetEditedUser = (): void => setEditedUser(initialUserState);

  const isEmailTaken = (email: string): boolean =>
    data.some((user: StoredUsers) => user.email === email);

  const isUserMissingData = (): boolean =>
    !editedUser.name ||
    !editedUser.email ||
    !editedUser.password ||
    !editedUser.role;

  const unAuthorizedRole = (role: string): boolean =>
    role !== "admin" && role !== "user";

  // --- Handlers ---
  const handleUserToBeEdited = (user: StoredUsers): void => {
    setUserId(user.id || "");
    setEditedUser(user);
    setIsUserEditing(true);
  };

  const handleInputChange = (name: string, value: string | boolean): void => {
    if (name.includes(".")) {
      const [parentKey, childKey] = name.split(".");
      setEditedUser((prev: StoredUsers | any) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setEditedUser((prev: StoredUsers) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSetAllCheckboxes = (value: boolean): void => {
    setEditedUser((prev: StoredUsers) => {
      const updateSection = (
        section: Record<string, boolean>
      ): Record<string, boolean> =>
        Object.keys(section).reduce(
          (acc, key) => ({ ...acc, [key]: value }),
          {}
        );
      return {
        ...prev,
        pk3: updateSection(prev.pk3),
        pk4: updateSection(prev.pk4),
        kg: updateSection(prev.kg),
        first: updateSection(prev.first),
        second: updateSection(prev.second),
        third: updateSection(prev.third),
        fourth: updateSection(prev.fourth),
        fifth: updateSection(prev.fifth),
      };
    });
  };

  const fetchUsers = async (): Promise<void> => {
    try {
      setLoading(true);
      setLoadingMsg("Fetching users...");
      const querySnapshot = await getDocs(collection(db, "users-data"));
      const usersData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as StoredUsers[];
      setData(usersData);
    } catch (error) {
      setError("Error fetching users");
    } finally {
      setLoading(false);
      setLoadingMsg("");
    }
  };

  useEffect(() => {
    if (!isFetched.current) {
      isFetched.current = true;
      fetchUsers();
    }
  }, []);

  const handleSaveOrEditUser = async (): Promise<void> => {
    setLoading(true);
    setLoadingMsg(isUserEditing ? "Editing user..." : "Saving user...");

    try {
      const isEdit = Boolean(userId);
      const { email, role } = editedUser;

      if (!isEdit && isEmailTaken(email)) {
        Alert.alert("Error", "Email already exists");
        return;
      }

      if (isUserMissingData()) {
        Alert.alert("Error", "Email, password, or name is missing");
        return;
      }

      if (unAuthorizedRole(role)) {
        Alert.alert("Error", "Invalid role");
        return;
      }

      if (isEdit) {
        const userDocRef = doc(db, "users-data", userId);
        await updateDoc(userDocRef, editedUser);
      } else {
        await addDoc(collection(db, "users-data"), editedUser);
      }

      resetEditedUser();
      setIsUserEditing(false);
      fetchUsers();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      setLoadingMsg("");
    }
  };

  const handleDeleteUser = async (id: string): Promise<void> => {
    setLoading(true);
    setLoadingMsg("Deleting user...");
    try {
      const userDocRef = doc(db, "users-data", id);
      await deleteDoc(userDocRef);
      fetchUsers();
    } catch (error) {
      setError("Error deleting user");
    } finally {
      setLoading(false);
      setLoadingMsg("");
    }
  };

  // --- UI ---
  const renderUser = (user: StoredUsers) => (
    <TouchableOpacity
      style={[
        styles.userContainer,
        user.baned && styles.userBanned,
        user.role === "admin" && styles.userAdmin,
      ]}
      onPress={() => handleUserToBeEdited(user)}
    >
      <CustomText value={user.name} bold color={globalColors.secondary} />
      <CustomText value={user.email} color={globalColors.secondary} />
      <TouchableOpacity
        style={styles.deleteIcon}
        onPress={() => handleDeleteUser(user.id)}
      >
        <MaterialIcons name="delete-forever" size={38} color="#b00" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const generatePassword = (): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    const passwordLength = 12;
    return Array.from({ length: passwordLength }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  };

  const handleGeneratePassword = (): void => {
    const password = generatePassword();
    handleInputChange("password", password);
  };

  const renderSwitchSection = (
    sectionKey: keyof StoredUsers,
    label: string
  ) => (
    <View style={styles.section} key={sectionKey}>
      <CustomText value={label} bold big color="#007AFF" />
      {Object.keys(editedUser[sectionKey] || {}).map((key) => (
        <View key={`${sectionKey}-${key}`} style={styles.switchRow}>
          <CustomText value={key} color="#333" />
          <Switch
            value={!!editedUser[sectionKey][key]}
            onValueChange={(val) =>
              handleInputChange(`${sectionKey}.${key}`, val)
            }
          />
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#007AFF" />
          <CustomText value={loadingMsg || "Loading..."} medium />
        </View>
      )}
      {error && <Text style={styles.errorMsg}>{error}</Text>}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Separator opacity={0.36} height={6} />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id || item.email}
          renderItem={({ item }) => renderUser(item)}
          contentContainerStyle={styles.usersList}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.formContainer}>
          <CustomText
            value={isUserEditing ? "Edit User" : "Add User"}
            bold
            big
          />
          <Separator opacity={0.56} />
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={editedUser.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="email@das.ac.ma"
              value={editedUser.email}
              onChangeText={(text) => handleInputChange("email", text)}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="************"
              value={editedUser.password}
              onChangeText={(text) => handleInputChange("password", text)}
              secureTextEntry={!showPassword}
            />
            <CustomButton
              style={[styles.button, { marginTop: 18, position: "relative" }]}
              onPress={() => handleGeneratePassword()}
              shadowHeight={1}
              shadowOpacity={0.52}
              shadowRadius={2}
            >
              <CustomText value="Generate Password" color="#007AFF" bold />
            </CustomButton>
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}
            >
              {!showPassword ? (
                <CustomIcon iconName="eye" iconColor="#555" iconSize={32} />
              ) : (
                <CustomIcon
                  iconName="eye-slash"
                  iconColor="#555"
                  iconSize={32}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Role</Text>
            <TextInput
              style={styles.input}
              placeholder="Role"
              value={editedUser.role}
              onChangeText={(text) => handleInputChange("role", text)}
            />
          </View>
          <View style={styles.switchRow}>
            <CustomText value="Banned" color="#333" />
            <Switch
              value={!!editedUser.baned}
              onValueChange={(val) => handleInputChange("baned", val)}
            />
          </View>
          <View style={styles.buttonRow}>
            <CustomButton
              style={styles.button}
              onPress={() => handleSetAllCheckboxes(true)}
            >
              <CustomText value="Set All True" color="#007AFF" bold />
            </CustomButton>
            <CustomButton
              style={styles.button}
              onPress={() => handleSetAllCheckboxes(false)}
            >
              <CustomText value="Set All False" color="#007AFF" bold />
            </CustomButton>
          </View>

          {/* Render switches for each section */}
          {renderSwitchSection("pk3", "PK3")}
          {renderSwitchSection("pk4", "PK4")}
          {renderSwitchSection("kg", "KG")}
          {renderSwitchSection("first", "First")}
          {renderSwitchSection("second", "Second")}
          {renderSwitchSection("third", "Third")}
          {renderSwitchSection("fourth", "Fourth")}
          {renderSwitchSection("fifth", "Fifth")}

          <View style={styles.buttonRow}>
            <CustomButton
              style={styles.button}
              onPress={handleSaveOrEditUser}
              shadowColor="#274818"
              shadowWidth={0}
              shadowHeight={1}
              shadowOpacity={0.58}
              shadowRadius={2}
            >
              <CustomText value={isUserEditing ? "Save" : "Add"} bold />
            </CustomButton>
            <CustomButton
              style={styles.button}
              onPress={() => {
                setIsUserEditing(false);
                resetEditedUser();
              }}
              shadowColor="#4f2222"
              shadowWidth={0}
              shadowHeight={1}
              shadowOpacity={0.58}
              shadowRadius={2}
            >
              <CustomText value="Cancel" bold />
            </CustomButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Admin;

// --- Styles ---
const styles = StyleSheet.create({
  container: { backgroundColor: globalColors.primary },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  errorMsg: { color: "#b00", textAlign: "center", margin: 8 },
  scrollContent: { paddingHorizontal: 10, paddingBottom: 10 },

  usersList: { marginBottom: 24, marginTop: 12 },
  userContainer: {
    position: "relative",
    maxWidth: 150,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 12,
    paddingVertical: 28,
    borderRadius: 8,
    marginBottom: 12,
    marginHorizontal: 8,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
  },
  userBanned: {
    backgroundColor: "#ffe6e6",
    borderWidth: 1,
    borderColor: "#b00",
  },
  userAdmin: {
    backgroundColor: "#e6ffe6",
    borderWidth: 1,
    borderColor: "#123000",
    shadowColor: "#123000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteIcon: {
    position: "absolute",
    top: -10,
    right: -12,
    zIndex: 1,
    backgroundColor: "#f4f4f4",
    borderRadius: 30,
    padding: 2,
  },
  formContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 16,
    elevation: 1,
  },
  inputGroup: { position: "relative", marginBottom: 12 },
  label: { marginBottom: 4, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#fff",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  section: { marginTop: 12, marginBottom: 6 },
  sectionTitle: { fontWeight: "bold", color: "#007AFF", marginBottom: 4 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  button: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: "center",
  },
  showPasswordButton: {
    position: "absolute",
    top: 20,
    right: 14,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: "center",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#bbb",
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: "center",
  },
  cancelButtonText: { color: "#fff", fontWeight: "bold" },
});
