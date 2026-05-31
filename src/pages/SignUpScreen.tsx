import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const passwordMismatch =
    attempted && confirmPassword.length > 0 && password !== confirmPassword;

  const handleSignUp = () => {
    setAttempted(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoWrapper}>
          <View style={styles.logoBox}>
            <View style={styles.crossVertical} />
            <View style={styles.crossHorizontal} />
          </View>
        </View>

        <Text style={styles.heading}>Sign Up For Free</Text>
        <Text style={styles.subheading}>Sign up in 1 minute for free!</Text>

        <Text style={styles.label}>Email Address</Text>
        <View
          style={[
            styles.inputWrapper,
            emailFocused && styles.inputWrapperFocused,
          ]}
        >
          <Feather
            name="mail"
            size={20}
            color={emailFocused ? "#5AC728" : "#AAAAAA"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email..."
            placeholderTextColor="#AAAAAA"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View
          style={[
            styles.inputWrapper,
            passwordFocused && styles.inputWrapperFocused,
            passwordMismatch && styles.inputWrapperError,
          ]}
        >
          <Feather
            name="lock"
            size={20}
            color={
              passwordMismatch
                ? "#FF4444"
                : passwordFocused
                  ? "#5AC728"
                  : "#AAAAAA"
            }
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password..."
            placeholderTextColor="#AAAAAA"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#AAAAAA"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Password Confirmation</Text>
        <View
          style={[
            styles.inputWrapper,
            confirmFocused && styles.inputWrapperFocused,
            passwordMismatch && styles.inputWrapperError,
          ]}
        >
          <Feather
            name="lock"
            size={20}
            color={
              passwordMismatch
                ? "#FF4444"
                : confirmFocused
                  ? "#5AC728"
                  : "#AAAAAA"
            }
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Re-enter your password..."
            placeholderTextColor="#AAAAAA"
            secureTextEntry={!showConfirm}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onFocus={() => setConfirmFocused(true)}
            onBlur={() => setConfirmFocused(false)}
          />
          <TouchableOpacity
            onPress={() => setShowConfirm(!showConfirm)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Feather
              name={showConfirm ? "eye" : "eye-off"}
              size={20}
              color="#AAAAAA"
            />
          </TouchableOpacity>
        </View>

        {passwordMismatch && (
          <View style={styles.errorBox}>
            <Feather name="alert-triangle" size={16} color="#FF4444" />
            <Text style={styles.errorText}>ERROR: Password do not match!</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.85}
          onPress={handleSignUp}
        >
          <Text style={styles.primaryButtonText}>Sign Up</Text>
          <Feather name="arrow-right" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.footerLink}>Sign In.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingBottom: 40,
  },

  // Logo
  logoWrapper: {
    alignItems: "center",
    marginTop: 32,
    marginBottom: 20,
  },
  logoBox: {
    width: 56,
    height: 56,
    backgroundColor: "#5AC728",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  crossVertical: {
    position: "absolute",
    width: 8,
    height: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
  crossHorizontal: {
    position: "absolute",
    width: 32,
    height: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },

  // Text
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: "#888888",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 8,
  },

  // Input
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 54,
    marginBottom: 18,
    backgroundColor: "#FFFFFF",
  },
  inputWrapperFocused: {
    borderColor: "#5AC728",
  },
  inputWrapperError: {
    borderColor: "#FF4444",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1A1A1A",
    paddingVertical: 0,
  },

  // Error
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFF0F0",
    borderWidth: 1.5,
    borderColor: "#FFCCCC",
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 18,
    marginTop: -6,
  },
  errorText: {
    fontSize: 13,
    color: "#FF4444",
    fontWeight: "500",
  },

  // Primary Button
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#5AC728",
    borderRadius: 16,
    height: 56,
    marginBottom: 28,
    shadowColor: "#5AC728",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  // Footer
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#888888",
  },
  footerLink: {
    fontSize: 14,
    color: "#5AC728",
    fontWeight: "600",
  },
});
