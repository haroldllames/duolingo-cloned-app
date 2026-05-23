import { useSSO, useSignUp } from "@clerk/expo";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
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
  onVerify,
  onResend,
  isLoading,
  errorMessage,
}: {
  visible: boolean;
  email: string;
  onClose: () => void;
  onVerify: (code: string) => void;
  onResend: () => void;
  isLoading: boolean;
  errorMessage?: string;
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
    if (code.length === 6 && !isLoading) {
      onVerify(code);
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

        <View className="bg-white rounded-t-[28px] px-6 pt-3 pb-11 items-center">
          <View className="w-10 h-1 bg-border rounded-full mb-7" />

          <View className="w-16 h-16 rounded-full bg-[#F0EDFE] items-center justify-center mb-4">
            <Ionicons name="mail" size={28} color="#6C4EF5" />
          </View>

          <Text className="font-poppins-bold text-[22px] text-text-primary mb-2 text-center">
            Check your email
          </Text>
          <Text className="body-md text-text-secondary text-center mb-8">
            We sent a 6-digit code to{"\n"}
            <Text className="font-poppins-semibold text-lingua-purple">
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
            className="flex-row gap-2.5 mb-4"
            activeOpacity={1}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <View
                key={i}
                className={`w-11.5 h-14 border-[1.5px] rounded-xl items-center justify-center ${
                  i < code.length
                    ? "border-lingua-purple bg-[#F0EDFE]"
                    : i === code.length
                    ? "border-lingua-purple bg-white"
                    : "border-border bg-surface"
                }`}
              >
                <Text className="font-poppins-semibold text-[22px] text-text-primary">
                  {code[i] ?? ""}
                </Text>
              </View>
            ))}
          </TouchableOpacity>

          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          <Text className="body-md text-text-secondary mt-2">
            Didn't receive it?{" "}
            <Text
              className="font-poppins-semibold text-lingua-purple"
              onPress={onResend}
            >
              Resend
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default function SignUpScreen() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [oauthLoading, setOauthLoading] = useState(false);

  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => { void WebBrowser.coolDownAsync(); };
  }, []);

  const handleSignUp = async () => {
    if (!email.trim() || !password) return;
    setVerifyError("");
    const { error } = await signUp.password({
      emailAddress: email.trim(),
      password,
    });
    if (error) return;
    const { error: sendError } = await signUp.verifications.sendEmailCode();
    if (!sendError) {
      setShowModal(true);
    }
  };

  const handleVerify = async (code: string) => {
    setVerifyError("");
    const { error } = await signUp.verifications.verifyEmailCode({ code });
    if (error) {
      setVerifyError(error.message ?? "Invalid code, please try again.");
      return;
    }
    if (signUp.status === "complete") {
      await signUp.finalize();
      router.replace("/");
    }
  };

  const handleResend = async () => {
    await signUp.verifications.sendEmailCode();
  };

  const handleOAuth = async (strategy: "oauth_google" | "oauth_facebook") => {
    if (oauthLoading) return;
    setOauthLoading(true);
    try {
      const { createdSessionId, setActive, authSessionResult } = await startSSOFlow({ strategy });
      if (authSessionResult?.type !== "success") return;
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err) {
      console.error("OAuth error:", err);
    } finally {
      setOauthLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <TouchableOpacity
        onPress={() => router.back()}
        className="px-4 py-2"
        activeOpacity={0.7}
      >
        <Ionicons name="chevron-back" size={26} color="#001328" />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="font-poppins-bold text-[28px] text-text-primary mb-1.5">
          Create your account
        </Text>
        <Text className="body-md text-text-secondary mb-2">
          Start your language journey today ✨
        </Text>

        {/* Mascot */}
        <View className="items-center justify-end" style={{ height: 130, marginBottom: -8 }}>
          <Image
            source={images.mascotAuth}
            style={{ width: 130, height: 130, transform: [{ scaleX: -1 }] }}
            resizeMode="contain"
          />
        </View>

        {/* Email input card */}
        <View className="border border-border rounded-xl px-3.5 pt-2.5 pb-2.5 bg-white mb-3">
          <Text className="font-poppins text-[12px] text-text-secondary mb-0.5">
            Email
          </Text>
          <TextInput
            style={styles.inputText}
            placeholder="alex@gmail.com"
            placeholderTextColor="#C4C9D4"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {errors.fields.emailAddress?.message ? (
          <Text style={styles.errorText}>{errors.fields.emailAddress.message}</Text>
        ) : null}

        {/* Password input card */}
        <View className="border border-border rounded-xl px-3.5 pt-2.5 pb-2.5 bg-white mb-3">
          <Text className="font-poppins text-[12px] text-text-secondary mb-0.5">
            Password
          </Text>
          <View className="flex-row items-center">
            <TextInput
              style={[styles.inputText, { flex: 1 }]}
              placeholder="••••••••"
              placeholderTextColor="#C4C9D4"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          </View>
        </View>
        {errors.fields.password?.message ? (
          <Text style={styles.errorText}>{errors.fields.password.message}</Text>
        ) : null}

        {/* Sign Up */}
        <TouchableOpacity
          className="btn-primary mb-5"
          style={fetchStatus === "fetching" ? { opacity: 0.6 } : undefined}
          onPress={handleSignUp}
          activeOpacity={0.85}
          disabled={fetchStatus === "fetching"}
        >
          <Text className="body-lg font-poppins-semibold text-white">
            {fetchStatus === "fetching" ? "Creating account…" : "Sign Up"}
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <Text className="body-sm text-text-secondary text-center mb-4">
          or continue with
        </Text>

        {/* Google */}
        <TouchableOpacity
          className="flex-row items-center border border-border rounded-xl py-3.5 px-4 bg-white mb-3"
          style={oauthLoading ? { opacity: 0.6 } : undefined}
          activeOpacity={0.85}
          onPress={() => handleOAuth("oauth_google")}
          disabled={oauthLoading}
        >
          <View className="w-6 items-center">
            <Ionicons name="logo-google" size={20} color="#DB4437" />
          </View>
          <Text className="body-md font-poppins-medium text-text-primary ml-3">
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Facebook */}
        <TouchableOpacity
          className="flex-row items-center border border-border rounded-xl py-3.5 px-4 bg-white mb-3"
          style={oauthLoading ? { opacity: 0.6 } : undefined}
          activeOpacity={0.85}
          onPress={() => handleOAuth("oauth_facebook")}
          disabled={oauthLoading}
        >
          <View className="w-6 items-center">
            <Ionicons name="logo-facebook" size={20} color="#1877F2" />
          </View>
          <Text className="body-md font-poppins-medium text-text-primary ml-3">
            Continue with Facebook
          </Text>
        </TouchableOpacity>

        {/* Apple — shown in UI but not yet wired (requires dev build + Apple config) */}
        <TouchableOpacity
          className="flex-row items-center border border-border rounded-xl py-3.5 px-4 bg-white mb-3"
          activeOpacity={0.85}
        >
          <View className="w-6 items-center">
            <Ionicons name="logo-apple" size={20} color="#000000" />
          </View>
          <Text className="body-md font-poppins-medium text-text-primary ml-3">
            Continue with Apple
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View className="items-center mt-2 pb-2">
          <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}>
            <Text className="body-md text-text-secondary">
              Already have an account?{" "}
              <Text className="font-poppins-semibold text-lingua-purple">
                Log in
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* Required for Clerk's bot protection */}
        <View nativeID="clerk-captcha" />
      </ScrollView>

      <VerificationModal
        visible={showModal}
        email={email}
        onClose={() => setShowModal(false)}
        onVerify={handleVerify}
        onResend={handleResend}
        isLoading={fetchStatus === "fetching"}
        errorMessage={verifyError}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  inputText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#001328",
    padding: 0,
    margin: 0,
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    height: 0,
    width: 0,
  },
  errorText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#DC2626",
    marginBottom: 8,
  },
});
