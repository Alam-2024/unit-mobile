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

  // --- Helpers ---
  const resetEditedUser = (): void => setEditedUser(initialUserState);

  const isEmailTaken = (email: string): boolean =>
    data.some((user: StoredUsers) => user.email === email);

  const isUserMissingData = (): boolean =>
    !editedUser.name ||
    !editedUser.email ||
    !editedUser.password ||
    !editedUser.role;

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
    try {
      if (userId) {
        const userDocRef = doc(db, "users-data", userId);
        await updateDoc(userDocRef, editedUser);
      } else {
        if (isEmailTaken(editedUser.email)) {
          Alert.alert("Error", "Email already exists");
          return;
        }
        if (isUserMissingData()) {
          Alert.alert("Error", "Email, password or name is missing");
          return;
        }
        await addDoc(collection(db, "users-data"), editedUser);
      }
      resetEditedUser();
      setIsUserEditing(false);
      fetchUsers();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id: string): Promise<void> => {
    setLoading(true);
    try {
      const userDocRef = doc(db, "users-data", id);
      await deleteDoc(userDocRef);
      fetchUsers();
    } catch (error) {
      setError("Error deleting user");
    } finally {
      setLoading(false);
    }
  };

  // --- UI ---
  const renderUser = (user: StoredUsers | any) => (
    <TouchableOpacity
      key={user.id}
      style={[
        styles.userContainer,
        user.baned && styles.userBanned,
        user.role === "admin" && styles.userAdmin,
      ]}
      onPress={() => handleUserToBeEdited(user)}
    >
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userEmail}>{user.email}</Text>
      <TouchableOpacity
        style={styles.deleteIcon}
        onPress={() => handleDeleteUser(user.id)}
      >
        <MaterialIcons name="delete-forever" size={28} color="#b00" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderSwitchSection = (
    sectionKey: keyof StoredUsers,
    label: string
  ) => (
    <View style={styles.section} key={sectionKey}>
      <Text style={styles.sectionTitle}>{label}</Text>
      {Object.keys(editedUser[sectionKey] || {}).map((key) => (
        <View key={`${sectionKey}-${key}`} style={styles.switchRow}>
          <Text style={styles.switchLabel}>{key}</Text>
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
          <Text>{loadingMsg || "Loading..."}</Text>
        </View>
      )}
      {error && <Text style={styles.errorMsg}>{error}</Text>}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.usersList}>
          {data.map((user) => renderUser(user))}
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            {isUserEditing ? "Edit User" : "Add User"}
          </Text>
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
              placeholder="Email"
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
              placeholder="Password"
              value={editedUser.password}
              onChangeText={(text) => handleInputChange("password", text)}
              secureTextEntry
            />
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
            <Text style={styles.switchLabel}>Baned</Text>
            <Switch
              value={!!editedUser.baned}
              onValueChange={(val) => handleInputChange("baned", val)}
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSetAllCheckboxes(true)}
            >
              <Text style={styles.buttonText}>Set All True</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSetAllCheckboxes(false)}
            >
              <Text style={styles.buttonText}>Set All False</Text>
            </TouchableOpacity>
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
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveOrEditUser}
            >
              <Text style={styles.saveButtonText}>
                {isUserEditing ? "Save" : "Add"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setIsUserEditing(false);
                resetEditedUser();
              }}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Admin;

// --- Styles ---
const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#fff8",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  errorMsg: { color: "#b00", textAlign: "center", margin: 8 },
  scrollContent: { padding: 16 },
  usersList: { marginBottom: 24 },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  userBanned: { backgroundColor: "#ffe6e6" },
  userAdmin: { borderWidth: 1, borderColor: "#007AFF" },
  userName: { flex: 1, fontWeight: "bold", fontSize: 16 },
  userEmail: { flex: 1, color: "#555" },
  deleteIcon: { padding: 4 },
  formContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 16,
    elevation: 1,
  },
  formTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  inputGroup: { marginBottom: 12 },
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
  switchLabel: { fontSize: 15, color: "#333" },
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
  buttonText: { color: "#007AFF", fontWeight: "bold" },
  saveButton: {
    flex: 1,
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: "center",
  },
  saveButtonText: { color: "#fff", fontWeight: "bold" },
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
