import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePostHog } from "posthog-react-native";

export default function OnboardingScreen() {
  const posthog = usePostHog();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-10 pt-2">
        {/* Logo Row */}
        <View className="flex flex-row justify-center items-center mb-6" style={{ gap: 8 }}>
          <Image
            source={images.mascotLogo}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
          <Text className="heading-3 text-text-primary">muolingo</Text>
        </View>

        {/* Heading */}
        <Text className="heading-1 text-text-primary font-medium">Your AI language</Text>
        <Text className="heading-1 text-lingua-purple">teacher.</Text>

        {/* Subtitle */}
        <Text className="body-md text-text-secondary mt-3">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        {/* Mascot + Speech Bubbles */}
        <View className="flex-1 items-center justify-center" style={{ position: "relative" }}>
          <View style={[styles.bubble, styles.helloBubble]}>
            <Text style={styles.bubbleText}>Hello!</Text>
          </View>

          <View style={[styles.bubble, styles.holaBubble]}>
            <Text style={styles.bubbleText}>¡Hola!</Text>
          </View>

          <View style={[styles.bubble, styles.niBubble]}>
            <Text style={[styles.bubbleText, styles.chineseText]}>你好!</Text>
          </View>

          <Image
            source={images.mascotWelcome}
            style={{ width: "90%", height: "100%" }}
            resizeMode="contain"
          />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          className="btn-primary flex-row items-center justify-center mb-4"
          onPress={() => {
            posthog.capture("onboarding_get_started_tapped");
            router.push("/(auth)/sign-up");
          }}
          activeOpacity={0.85}
        >
          <Text className="body-lg font-poppins-semibold text-white mr-2">Get Started</Text>
          <Ionicons name="chevron-forward" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  helloBubble: {
    left: 0,
    top: "30%",
  },
  holaBubble: {
    right: 0,
    top: "12%",
  },
  niBubble: {
    right: 8,
    top: "52%",
  },
  bubbleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#001328",
  },
  chineseText: {
    color: "#FF4D4F",
  },
});
