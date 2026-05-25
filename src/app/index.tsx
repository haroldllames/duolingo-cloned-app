import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

import { useLanguageStore } from "@/store/useLanguageStore";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { selectedLanguage, isHydrated } = useLanguageStore();

  if (!isLoaded || !isHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguage) {
    return <Redirect href="/language-selection" />;
  }

  return <Redirect href="/(tabs)" />;
}
