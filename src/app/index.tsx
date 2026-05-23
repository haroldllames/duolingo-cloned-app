import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text className="heading-2 text-lingua-purple">Muolingo</Text>
      <TouchableOpacity
        className="btn-primary"
        onPress={() => router.push("/onboarding")}
        activeOpacity={0.85}
      >
        <Text className="body-lg font-poppins-semibold text-white">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
