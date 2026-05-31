import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RESET_OPTIONS = [
  {
    id: "email",
    title: "Email Address",
    subtitle: "Send via email address securely.",
    icon: "email-outline",
    iconLib: "material",
  },
  {
    id: "2fa",
    title: "2 Factor Authentication",
    subtitle: "Send via 2FA securely.",
    icon: "monitor-cellphone",
    iconLib: "material",
  },
  {
    id: "google",
    title: "Google Authenticator",
    subtitle: "Send via authenticator securely.",
    icon: "lock-outline",
    iconLib: "material",
  },
];

export default function ForgotPasswordScreen() {
  const [selectedOption, setSelectedOption] = useState("2fa");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Feather name="chevron-left" size={22} color="#1A1A1A" />
        </TouchableOpacity>

        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.subheading}>
          Select which methods you'd like to reset.
        </Text>

        {RESET_OPTIONS.map((option) => {
          const isSelected = selectedOption === option.id;
          return (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionCard,
                isSelected && styles.optionCardSelected,
              ]}
              onPress={() => setSelectedOption(option.id)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.optionIconBox,
                  isSelected && styles.optionIconBoxSelected,
                ]}
              >
                <MaterialCommunityIcons
                  // @ts-ignore
                  name={option.icon}
                  size={24}
                  color={isSelected ? "#FFFFFF" : "#888888"}
                />
              </View>

              <View style={styles.optionTextBlock}>
                <Text
                  style={[
                    styles.optionTitle,
                    isSelected && styles.optionTitleSelected,
                  ]}
                >
                  {option.title}
                </Text>
                <Text
                  style={[
                    styles.optionSubtitle,
                    isSelected && styles.optionSubtitleSelected,
                  ]}
                >
                  {option.subtitle}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.85}
          onPress={() => router.back()}
        >
          <Text style={styles.primaryButtonText}>Reset Password</Text>
          <Feather name="arrow-right" size={20} color="#FFFFFF" />
        </TouchableOpacity>
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

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F2F2ED",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 28,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 32,
    lineHeight: 20,
  },

  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  optionCardSelected: {
    borderWidth: 2,
    borderColor: "#5AC728",
    backgroundColor: "#F0FDE4",
  },
  optionIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#F2F2ED",
    alignItems: "center",
    justifyContent: "center",
  },
  optionIconBoxSelected: {
    backgroundColor: "#5AC728",
  },
  optionTextBlock: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 3,
  },
  optionTitleSelected: {
    color: "#3A8A15",
  },
  optionSubtitle: {
    fontSize: 13,
    color: "#888888",
  },
  optionSubtitleSelected: {
    color: "#5AC728",
  },

  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#5AC728",
    borderRadius: 16,
    height: 56,
    marginTop: 16,
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
});
