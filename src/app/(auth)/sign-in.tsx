import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function VerificationModal({
  visible,
  email,
  onClose,
}: {
  visible: boolean;
  email: string;
  onClose: () => void;
}) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  useEffect(() => {
    if (code.length === 6) {
      router.replace("/");
    }
  }, [code]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
        </TouchableWithoutFeedback>

        <View style={styles.modalSheet}>
          <View style={styles.modalHandle} />

          <View style={styles.emailIconCircle}>
            <Ionicons name="mail" size={28} color="#6C4EF5" />
          </View>

          <Text style={styles.modalTitle}>Check your email</Text>
          <Text style={styles.modalSubtitle}>
            We sent a 6-digit code to{"\n"}
            <Text style={{ color: "#6C4EF5", fontFamily: "Poppins-SemiBold" }}>
              {email}
            </Text>
          </Text>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={(t) =>
              setCode(t.replace(/[^0-9]/g, "").slice(0, 6))
            }
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
          />

          <TouchableOpacity
            onPress={() => inputRef.current?.focus()}
            style={styles.codeRow}
            activeOpacity={1}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.codeBox,
                  i === code.length && styles.codeBoxActive,
                  i < code.length && styles.codeBoxFilled,
                ]}
              >
                <Text style={styles.codeDigit}>{code[i] ?? ""}</Text>
              </View>
            ))}
          </TouchableOpacity>

          <Text style={styles.resendText}>
            Didn't receive it?{" "}
            <Text style={styles.resendLink}>Resend</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSignIn = () => {
    if (email.trim()) {
      setShowModal(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backBtn}
        activeOpacity={0.7}
      >
        <Ionicons name="chevron-back" size={24} color="#001328" />
      </TouchableOpacity>

      <View style={styles.container}>
        {/* Mascot */}
        <View style={styles.mascotRow}>
          <Image
            source={images.mascotAuth}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>

        {/* Heading */}
        <Text style={styles.heading}>Welcome back</Text>
        <Text style={styles.subtitle}>
          Continue your language learning journey
        </Text>

        {/* Email */}
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="you@example.com"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        {/* Sign In */}
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={handleSignIn}
          activeOpacity={0.85}
        >
          <Text style={styles.continueBtnText}>Sign In</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Google */}
        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.85}>
          <Ionicons name="logo-google" size={20} color="#001328" />
          <Text style={styles.socialBtnText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Apple */}
        <TouchableOpacity style={[styles.socialBtn, { marginTop: 12 }]} activeOpacity={0.85}>
          <Ionicons name="logo-apple" size={20} color="#001328" />
          <Text style={styles.socialBtnText}>Continue with Apple</Text>
        </TouchableOpacity>

        {/* Sign up link */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => router.replace("/(auth)/sign-up")}>
            <Text style={styles.footerText}>
              Don't have an account?{" "}
              <Text style={styles.footerLink}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <VerificationModal
        visible={showModal}
        email={email}
        onClose={() => setShowModal(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  mascotRow: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  mascot: {
    width: 110,
    height: 110,
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#001328",
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 28,
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: "#001328",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F6F7FB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001328",
    marginBottom: 16,
  },
  continueBtn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  continueBtnText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#6B7280",
    marginHorizontal: 12,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
    gap: 10,
  },
  socialBtnText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#001328",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 12,
  },
  footerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  footerLink: {
    fontFamily: "Poppins-SemiBold",
    color: "#6C4EF5",
  },
  // Modal
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    height: 0,
    width: 0,
  },
  modalSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 44,
    alignItems: "center",
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    marginBottom: 28,
  },
  emailIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#F0EDFE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  modalTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#001328",
    marginBottom: 8,
    textAlign: "center",
  },
  modalSubtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 22,
  },
  codeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 28,
  },
  codeBox: {
    width: 46,
    height: 56,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F7FB",
  },
  codeBoxActive: {
    borderColor: "#6C4EF5",
    backgroundColor: "#FFFFFF",
  },
  codeBoxFilled: {
    borderColor: "#6C4EF5",
    backgroundColor: "#F0EDFE",
  },
  codeDigit: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
    color: "#001328",
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  resendLink: {
    fontFamily: "Poppins-SemiBold",
    color: "#6C4EF5",
  },
});
