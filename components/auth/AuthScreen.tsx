import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initialUserState } from "@/interfaces/constants/initialUserValues";

import { db, authFirebase } from "@/firebase/fireConfig";
import { useAppContext } from "@/hooks/useContextHook";
import { StoredUsers } from "@/interfaces/user/IUser";
import CustomButton from "@/components/customs/CustomButton";
import CustomText from "@/components/customs/CustomText";
import { authStyles } from "./authStyles";

interface AuthScreenProps {
  onCloseModal?: () => void;
}

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(/@das\.ac\.ma$/, "Invalid email domain. Use @das.ac.ma.")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(/@das\.ac\.ma$/, "Invalid email domain. Use @das.ac.ma.")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const AuthScreen = ({ onCloseModal }: AuthScreenProps) => {
  const {
    setLoggedInUser,
    setIsUserAuthenticated,
    setIsAuthenticatedAdminUser,
  } = useAppContext();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    errorMessage: "",
    infoMessage: "",
    loading: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = mode === "login";

  // Generate Password functionality
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
    setFormState((prev) => ({ ...prev, password }));
  };

  const resetMessages = () =>
    setFormState((prev) => ({
      ...prev,
      errorMessage: "",
      infoMessage: "",
    }));

  // REGISTER
  const handleRegister = async () => {
    try {
      resetMessages();
      setFormState((prev) => ({ ...prev, loading: true }));

      await registerSchema.validate({
        email: formState.email,
        password: formState.password,
      });

      const userCredential = await createUserWithEmailAndPassword(
        authFirebase,
        formState.email,
        formState.password
      );
      const firebaseUser = userCredential.user;

      await addDoc(collection(db, "users-data"), {
        ...initialUserState, // ← Use initialUserState to set default values
        userUid: firebaseUser.uid,
        email: firebaseUser.email,
        role: "user",
        baned: false,
        createdAt: new Date().toISOString(),
      });

      setFormState((prev) => ({
        ...prev,
        infoMessage: "Account created. You can now log in.",
        loading: false,
      }));
      setMode("login");
    } catch (err: any) {
      let msg = "Something went wrong";
      if (err instanceof Yup.ValidationError) msg = err.message;
      if (err.code === "auth/email-already-in-use") {
        msg = "Email already registered.";
      }
      setFormState((prev) => ({
        ...prev,
        errorMessage: msg,
        loading: false,
      }));
    }
  };

  // LOGIN
  const handleLogin = async () => {
    try {
      resetMessages();
      setFormState((prev) => ({ ...prev, loading: true }));

      await loginSchema.validate({
        email: formState.email,
        password: formState.password,
      });

      const userCredential = await signInWithEmailAndPassword(
        authFirebase,
        formState.email,
        formState.password
      );
      const firebaseUser = userCredential.user;

      const usersCollection = collection(db, "users-data");
      const q = query(
        usersCollection,
        where("userUid", "==", firebaseUser.uid)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setFormState((prev) => ({
          ...prev,
          errorMessage: "User profile not found. Contact admin.",
          loading: false,
        }));
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data() as StoredUsers;

      if (userData.baned) {
        setFormState((prev) => ({
          ...prev,
          errorMessage: "User is banned. Please contact the admin.",
          loading: false,
        }));
        return;
      }

      const userToStore: StoredUsers = {
        id: userDoc.id,
        userUid: userData.userUid,
        name: userData.name,
        email: userData.email,
        role: userData.role,
        baned: userData.baned,
        pk3: userData.pk3 || {},
        pk4: userData.pk4 || {},
        kg: userData.kg || {},
        first: userData.first || {},
        second: userData.second || {},
        third: userData.third || {},
        fourth: userData.fourth || {},
        fifth: userData.fifth || {},
        sixth: userData.sixth || {},
        seventh: userData.seventh || {},
        eighth: userData.eighth || {},
        ninth: userData.ninth || {},
        tenth: userData.tenth || {},
        eleventh: userData.eleventh || {},
        twelfth: userData.twelfth || {},
      };

      if (userToStore.role === "admin") {
        setIsAuthenticatedAdminUser(true);
      }

      await AsyncStorage.setItem("user", JSON.stringify(userToStore));
      await AsyncStorage.setItem("loginTime", Date.now().toString());

      setLoggedInUser(userToStore);
      setIsUserAuthenticated(true);

      setFormState((prev) => ({
        ...prev,
        infoMessage: "Login successful.",
        loading: false,
      }));

      if (onCloseModal) onCloseModal();
      Alert.alert(
        "Login successful",
        `Welcome ${userToStore.name || userToStore.email}!`
      );
    } catch (err: any) {
      let msg = "Something went wrong";
      if (err instanceof Yup.ValidationError) msg = err.message;
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        msg = "Invalid email or password.";
      }
      setFormState((prev) => ({
        ...prev,
        errorMessage: msg,
        loading: false,
      }));
    }
  };

  const handleSubmit = () => {
    if (isLogin) handleLogin();
    else handleRegister();
  };

  return (
    <View style={authStyles.screen}>
      <View style={authStyles.card}>
        <Text style={authStyles.title}>
          {isLogin ? "Welcome back" : "Create account"}
        </Text>
        <Text style={authStyles.subtitle}>
          {isLogin
            ? "Sign in to access your dashboard."
            : "Sign up with your school email to get started."}
        </Text>

        {formState.errorMessage ? (
          <Text style={authStyles.errorText}>{formState.errorMessage}</Text>
        ) : null}

        {formState.infoMessage ? (
          <Text style={authStyles.infoText}>{formState.infoMessage}</Text>
        ) : null}

        <View style={authStyles.inputGroup}>
          <Text style={authStyles.label}>Email</Text>
          <TextInput
            placeholder="your-email@das.ac.ma"
            value={formState.email}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(text) =>
              setFormState((prev) => ({ ...prev, email: text }))
            }
            style={authStyles.input}
            placeholderTextColor="#9ca3af"
          />
        </View>

        <View style={authStyles.inputGroup}>
          <Text style={authStyles.label}>Password</Text>
          <View style={authStyles.passwordContainer}>
            <TextInput
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              value={formState.password}
              onChangeText={(text) =>
                setFormState((prev) => ({ ...prev, password: text }))
              }
              style={[authStyles.input, authStyles.inputPassword]}
              placeholderTextColor="#9ca3af"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={authStyles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.7}
            >
              <Text style={authStyles.eyeIconText}>
                {showPassword ? "🙈" : "👁️"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {!isLogin && (
          <View
            style={{
              marginBottom: 16,
            }}
          >
            <TouchableOpacity
              style={authStyles.generateBtn}
              onPress={handleGeneratePassword}
              activeOpacity={0.7}
            >
              <Text style={authStyles.generateBtnText}>
                🔑 Generate Secure Password
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <CustomButton
          onPress={handleSubmit}
          style={[authStyles.btn, formState.loading && authStyles.btnDisabled]}
          shadowColor="#111827"
          shadowWidth={1}
          shadowHeight={3}
          shadowOpacity={0.25}
          shadowRadius={12}
          disabled={formState.loading}
        >
          <CustomText
            value={
              formState.loading
                ? "Please wait..."
                : isLogin
                ? "Login"
                : "Create account"
            }
            big
            center
            bold
            color="#ffffff"
          />
        </CustomButton>

        {isLogin && (
          <TouchableOpacity style={authStyles.linkRight}>
            <Text style={authStyles.linkTextSmall}>Forgot your password?</Text>
          </TouchableOpacity>
        )}

        <View style={authStyles.dividerRow}>
          <View style={authStyles.divider} />
          <Text style={authStyles.dividerText}>or</Text>
          <View style={authStyles.divider} />
        </View>

        <View style={authStyles.switchRow}>
          <Text style={authStyles.switchText}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Text>
          <TouchableOpacity
            onPress={() => {
              resetMessages();
              setMode(isLogin ? "register" : "login");
              setShowPassword(false);
            }}
          >
            <Text style={authStyles.switchLink}>
              {isLogin ? "Create one" : "Log in"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;
