import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "@/firebase/fireConfig";
import { useAppContext } from "@/hooks/useContextHook";
import { initialUserValues, StoredUsers } from "@/interfaces/user/IUser";

interface LoginProps {
  onCloseModal?: () => void;
}

// Yup validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(/@das\.ac\.ma$/, "Invalid email domain. Use @das.ac.ma.")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({ onCloseModal }: LoginProps) => {
  const {
    setLoggedInUser,
    setIsUserAuthenticated,
    setIsAuthenticatedAdminUser,
  } = useAppContext();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    errorMessage: "",
    infoMessage: "",
  });

  const fetchUsers = async () => {
    const usersCollection = collection(db, "users-data");
    const querySnapshot = await getDocs(usersCollection);
    return querySnapshot.docs.map((doc) => doc.data());
  };

  const handleLogin = async () => {
    try {
      // Validate the form
      await loginSchema.validate({
        email: formState.email,
        password: formState.password,
      });

      // Get users data
      const usersData = await fetchUsers();
      const user = usersData.find(
        (user) =>
          user.email === formState.email && user.password === formState.password
      );

      if (!user) {
        setFormState((prev) => ({
          ...prev,
          errorMessage: "Invalid email or password.",
        }));
      } else if (user.baned) {
        setFormState((prev) => ({
          ...prev,
          errorMessage: "User is banned. Please contact the admin.",
        }));
      } else {
        // Keep user data
        const userToStore = {
          name: user.name,
          email: user.email,
          role: user.role,
          baned: user.baned,
          pk3: user.pk3 || {},
          pk4: user.pk4 || {},
          kg: user.kg || {},
          first: user.first || {},
          second: user.second || {},
          third: user.third || {},
          fourth: user.fourth || {},
          fifth: user.fifth || {},
        };

        if (user.role === "admin") {
          setIsAuthenticatedAdminUser(true);
          setFormState((prev) => ({
            ...prev,
            infoMessage: "Welcome admin!",
            errorMessage: "",
          }));
        }

        // Store user data
        await AsyncStorage.setItem("user", JSON.stringify(userToStore));
        await AsyncStorage.setItem("loginTime", Date.now().toString());

        // Update state
        setLoggedInUser(userToStore as StoredUsers);
        setIsUserAuthenticated(true);

        setFormState((prev) => ({
          ...prev,
          infoMessage: "Login successful.",
          errorMessage: "",
        }));

        if (onCloseModal) {
          onCloseModal(); // Close the modal if provided
        }

        Alert.alert("Login successful, welcome " + user.name + "!");
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setFormState((prev) => ({
          ...prev,
          errorMessage: "Invalid credentials",
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          errorMessage: "Something went wrong",
        }));
      }
    }
  };

  return (
    <View>
      {formState.errorMessage && (
        <Text style={{ color: "red" }}>{formState.errorMessage}</Text>
      )}
      {formState.infoMessage && (
        <Text style={{ color: "green" }}>{formState.infoMessage}</Text>
      )}

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Email:</Text>
        <TextInput
          placeholder="your-email@das.ac.ma"
          value={formState.email}
          autoCapitalize="none"
          onChangeText={(text) =>
            setFormState((prev) => ({ ...prev, email: text }))
          }
          style={styles.textInput}
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Password:</Text>
        <TextInput
          placeholder="**********"
          secureTextEntry={true}
          value={formState.password}
          onChangeText={(text) =>
            setFormState((prev) => ({ ...prev, password: text }))
          }
          style={styles.textInput}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    minWidth: 250,
  },
  btn: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#2e78b7",
    minWidth: 250,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Login;
