import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 justify-center items-center gap-4 bg-white">
      <Text className="heading-2 text-lingua-purple">Muolingo</Text>
      <Text className="body-md text-text-secondary">You're signed in!</Text>
      <TouchableOpacity
        className="btn-primary"
        onPress={() => router.push("/language-selection")}
        activeOpacity={0.85}
      >
        <Text className="body-lg font-poppins-semibold text-white">Choose a Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="btn-ghost"
        onPress={() => signOut()}
        activeOpacity={0.85}
      >
        <Text className="body-md text-text-secondary">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
