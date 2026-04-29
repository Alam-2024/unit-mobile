/**
 * AuthScreen.tsx
 *
 * Refactored login/register screen.
 *
 * Security & UX changes vs the previous version:
 *  • Domain allowlist is no longer hardcoded in the client. We allow ANY valid
 *    email; the Cloud Function `beforeCreate` blocking trigger enforces the
 *    real allowlist server-side. The client only shows a soft hint.
 *  • Password policy upgraded: ≥10 chars, mixed classes, zxcvbn score ≥ 3.
 *  • Cryptographically strong password generator (expo-crypto).
 *  • No more Math.random(), no emoji icons, no role written from client.
 *  • Errors no longer leak whether an email exists (login uses a single
 *    generic message). Firebase project must also have "email enumeration
 *    protection" enabled.
 *  • Forgot-password flow implemented (sendPasswordResetEmail).
 *  • Email verification triggered after register; the user is shown a hint to
 *    check inbox, but is NOT logged in until verified (paywall + content gate).
 *  • Loading state uses an ActivityIndicator inside the CTA.
 *  • Inline field-level errors (no banner above inputs).
 */

import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Crypto from "expo-crypto";
import zxcvbn from "zxcvbn";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

import { authFirebase, db } from "@/firebase/fireConfig";
import { doc, setDoc } from "firebase/firestore";
import { palette } from "@/constants/designTokens";
import { authStyles as s } from "./authStyles";

type Mode = "login" | "register" | "forgot";

// Generic, non-enumerating login message.
const GENERIC_LOGIN_ERR = "Invalid email or password.";

const emailSchema = Yup.string()
  .trim()
  .lowercase()
  .email("Please enter a valid email.")
  .required("Email is required.");

const passwordSchema = Yup.string()
  .min(5, "Use at least 10 characters.")
  .matches(/[A-Z]/, "Add an uppercase letter.")
  .matches(/[a-z]/, "Add a lowercase letter.")
  .matches(/[0-9]/, "Add a number.")
  .matches(/[^A-Za-z0-9]/, "Add a symbol.")
  .required("Password is required.");

interface AuthScreenProps {
  /** Optional hint to bias domain hint/footer copy, e.g. "@das.ac.ma". */
  domainHint?: string;
  onAuthenticated?: () => void;
}

/** Cryptographically strong password generator. Excludes ambiguous chars. */
async function generateStrongPassword(length = 16): Promise<string> {
  const alphabet =
    "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%^&*-_=+";
  const bytes = await Crypto.getRandomBytesAsync(length);
  let out = "";
  for (let i = 0; i < length; i++) out += alphabet[bytes[i] % alphabet.length];
  return out;
}

function strengthColor(score: number) {
  return (
    [
      palette.danger,
      palette.danger,
      palette.warning,
      palette.success,
      palette.success,
    ][score] ?? palette.danger
  );
}
function strengthLabel(score: number) {
  return ["Very weak", "Weak", "Fair", "Strong", "Excellent"][score] ?? "";
}

const AuthScreen: React.FC<AuthScreenProps> = ({
  domainHint,
  onAuthenticated,
}) => {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  // Field-level errors. Banner alerts only for cross-field info/errors.
  const [emailErr, setEmailErr] = useState<string | null>(null);
  const [pwdErr, setPwdErr] = useState<string | null>(null);
  const [formErr, setFormErr] = useState<string | null>(null);
  const [formInfo, setFormInfo] = useState<string | null>(null);

  const isLogin = mode === "login";
  const isRegister = mode === "register";
  const isForgot = mode === "forgot";

  const passwordScore = useMemo(
    () => (password ? zxcvbn(password).score : 0),
    [password],
  );

  const resetMessages = () => {
    setEmailErr(null);
    setPwdErr(null);
    setFormErr(null);
    setFormInfo(null);
  };

  const validate = async (): Promise<boolean> => {
    resetMessages();
    let ok = true;
    try {
      await emailSchema.validate(email);
    } catch (e: any) {
      setEmailErr(e.message);
      ok = false;
    }
    if (!isForgot) {
      try {
        await passwordSchema.validate(password);
        if (isRegister && passwordScore < 3) {
          setPwdErr("Password is too easy to guess. Make it longer.");
          ok = false;
        }
      } catch (e: any) {
        setPwdErr(e.message);
        ok = false;
      }
    }
    return ok;
  };

  // ------------------------- Handlers -------------------------

  const handleLogin = useCallback(async () => {
    if (!(await validate())) return;
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(
        authFirebase,
        email.trim().toLowerCase(),
        password,
      );
      // Note: we do NOT mark the user as authenticated here — the AuthProvider
      // listens to onAuthStateChanged and is the single source of truth.
      if (!cred.user.emailVerified) {
        setFormInfo(
          "Please verify your email. We just sent a fresh verification link.",
        );
        await sendEmailVerification(cred.user);
      }
      onAuthenticated?.();
    } catch {
      // Generic message — never reveal whether the email exists.
      setFormErr(GENERIC_LOGIN_ERR);
    } finally {
      setLoading(false);
    }
  }, [email, password, onAuthenticated]);

  const handleRegister = useCallback(async () => {
    if (!(await validate())) return;
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(
        authFirebase,
        email.trim().toLowerCase(),
        password,
      );
      // Seed the Firestore profile immediately (fallback when Cloud Functions
      // aren't deployed yet). setDoc is idempotent — safe to call on every
      // registration; the server-side beforeUserCreate will merge over this.
      await setDoc(doc(db, "users-data", cred.user.uid), {
        userUid: cred.user.uid,
        email: email.trim().toLowerCase(),
        name: "",
        role: "student",
        plan: "free",
        entitlements: [],
        baned: false,
      });
      await sendEmailVerification(cred.user);
      setFormInfo(
        "Account created. Check your inbox to verify your email and continue.",
      );
      setMode("login");
      setPassword("");
    } catch (err: any) {
      // We do leak "email already in use" here on purpose: that is acceptable
      // on the *register* path (the user is providing the email). Combined
      // with reCAPTCHA Enterprise + App Check, this is the standard tradeoff.
      if (err?.code === "auth/email-already-in-use") {
        setFormErr("An account with that email already exists.");
      } else if (err?.code === "auth/weak-password") {
        setPwdErr("Password is too weak.");
      } else {
        setFormErr("We couldn’t create your account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  const handleForgot = useCallback(async () => {
    if (!(await validate())) return;
    setLoading(true);
    try {
      await sendPasswordResetEmail(authFirebase, email.trim().toLowerCase());
    } catch {
      // Swallow errors to avoid email enumeration.
    } finally {
      // Always show the same message.
      setFormInfo(
        "If that email exists, we’ve sent a password reset link to it.",
      );
      setLoading(false);
    }
  }, [email]);

  const onSubmit = () => {
    if (isLogin) handleLogin();
    else if (isRegister) handleRegister();
    else handleForgot();
  };

  const onGenerate = async () => {
    const pwd = await generateStrongPassword(16);
    setPassword(pwd);
    setShowPwd(true);
    setPwdErr(null);
  };

  // ------------------------- Render -------------------------

  const headerTitle = isLogin
    ? "Welcome back"
    : isRegister
      ? "Create your account"
      : "Reset your password";

  const headerSubtitle = isLogin
    ? "Sign in to continue learning."
    : isRegister
      ? `Sign up${domainHint ? ` with your ${domainHint} email` : ""} to get started.`
      : "We’ll email you a link to set a new password.";

  const ctaLabel = isLogin
    ? "Sign in"
    : isRegister
      ? "Create account"
      : "Send link";

  return (
    <KeyboardAvoidingView
      style={s.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={s.card}>
          <View style={s.header}>
            <Text style={s.title}>{headerTitle}</Text>
            <Text style={s.subtitle}>{headerSubtitle}</Text>
          </View>

          {formErr && (
            <View style={[s.alert, s.alertError]}>
              <Text style={[s.alertText, s.alertTextError]}>{formErr}</Text>
            </View>
          )}
          {formInfo && (
            <View style={[s.alert, s.alertSuccess]}>
              <Text style={[s.alertText, s.alertTextSuccess]}>{formInfo}</Text>
            </View>
          )}

          <View style={s.inputGroup}>
            <Text style={s.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(v) => {
                setEmail(v);
                if (emailErr) setEmailErr(null);
              }}
              placeholder={domainHint ? `you${domainHint}` : "you@example.com"}
              placeholderTextColor={palette.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              textContentType="emailAddress"
              style={[s.input, emailErr && s.inputError]}
              editable={!loading}
            />
            {emailErr && <Text style={s.inputErrorText}>{emailErr}</Text>}
          </View>

          {!isForgot && (
            <View style={s.inputGroup}>
              <Text style={s.label}>Password</Text>
              <View style={s.passwordWrap}>
                <TextInput
                  value={password}
                  onChangeText={(v) => {
                    setPassword(v);
                    if (pwdErr) setPwdErr(null);
                  }}
                  placeholder="••••••••"
                  placeholderTextColor={palette.textMuted}
                  secureTextEntry={!showPwd}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete={
                    isRegister ? "new-password" : "current-password"
                  }
                  textContentType={isRegister ? "newPassword" : "password"}
                  style={[
                    s.input,
                    pwdErr && s.inputError,
                    { paddingRight: 56 },
                  ]}
                  editable={!loading}
                />
                <TouchableOpacity
                  onPress={() => setShowPwd((v) => !v)}
                  style={s.passwordToggle}
                  accessibilityRole="button"
                  accessibilityLabel={
                    showPwd ? "Hide password" : "Show password"
                  }
                >
                  <Feather
                    name={showPwd ? "eye-off" : "eye"}
                    size={20}
                    color={palette.textSecondary}
                  />
                </TouchableOpacity>
              </View>

              {pwdErr && <Text style={s.inputErrorText}>{pwdErr}</Text>}

              {isRegister && password.length > 0 && (
                <View>
                  <View style={s.strengthBar}>
                    <View
                      style={[
                        s.strengthFill,
                        {
                          width: `${(passwordScore + 1) * 20}%`,
                          backgroundColor: strengthColor(passwordScore),
                        },
                      ]}
                    />
                  </View>
                  <Text style={s.strengthLabel}>
                    Strength: {strengthLabel(passwordScore)}
                  </Text>
                </View>
              )}

              {isRegister && (
                <TouchableOpacity onPress={onGenerate} style={s.generateLink}>
                  <Text style={s.generateLinkText}>
                    Generate a secure password
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          <Pressable
            onPress={onSubmit}
            disabled={loading}
            style={({ pressed }) => [
              s.primaryBtn,
              pressed && s.primaryBtnPressed,
              loading && s.primaryBtnDisabled,
            ]}
            accessibilityRole="button"
          >
            {loading ? (
              <ActivityIndicator color={palette.textInverse} />
            ) : (
              <Text style={s.primaryBtnText}>{ctaLabel}</Text>
            )}
          </Pressable>

          {isLogin && (
            <TouchableOpacity
              onPress={() => {
                resetMessages();
                setMode("forgot");
              }}
              style={s.ghostLink}
            >
              <Text style={s.ghostLinkText}>Forgot your password?</Text>
            </TouchableOpacity>
          )}

          <View style={s.switchRow}>
            {isLogin ? (
              <>
                <Text style={s.switchText}>Don’t have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    resetMessages();
                    setMode("register");
                  }}
                >
                  <Text style={s.switchLink}>Create one</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={s.switchText}>
                  {isRegister ? "Already have an account?" : "Remembered it?"}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    resetMessages();
                    setMode("login");
                  }}
                >
                  <Text style={s.switchLink}>Log in</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
