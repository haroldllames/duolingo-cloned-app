import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { usePostHog } from "posthog-react-native";

import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { Language, LanguageCode } from "@/types/learning";

function formatLearners(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M learners`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K learners`;
  return `${n} learners`;
}

export default function LanguageSelection() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const setSelectedLanguage = useLanguageStore((s) => s.setSelectedLanguage);
  const posthog = usePostHog();

  const filtered = languages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchText.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(searchText.toLowerCase())
  );

  function renderLanguage({ item }: { item: Language }) {
    const isSelected = item.code === selectedCode;
    return (
      <TouchableOpacity
        onPress={() => setSelectedCode(item.code)}
        activeOpacity={0.7}
        className={`flex-row items-center px-4 py-3 mb-2 rounded-2xl border ${
          isSelected
            ? "bg-purple-50 border-lingua-purple"
            : "bg-white border-border"
        }`}
      >
        <Image
          source={{ uri: item.flag }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
          resizeMode="cover"
        />
        <View className="flex-1 ml-3">
          <Text className="heading-4 text-text-primary">{item.name}</Text>
          <Text className="body-sm text-text-secondary">
            {formatLearners(item.totalLearners)}
          </Text>
        </View>
        {isSelected ? (
          <View className="w-7 h-7 rounded-full bg-lingua-blue items-center justify-center">
            <Ionicons name="checkmark" size={16} color="white" />
          </View>
        ) : (
          <Ionicons name="chevron-forward" size={18} color="#6B7280" />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View className="flex-row items-center px-4 py-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10"
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#001328" />
        </TouchableOpacity>
        <Text className="flex-1 text-center heading-3 text-text-primary">
          Choose a language
        </Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Search bar */}
      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-surface border border-border rounded-xl px-4 py-3 gap-2">
          <Ionicons name="search-outline" size={18} color="#6B7280" />
          <TextInput
            placeholder="Search languages"
            placeholderTextColor="#6B7280"
            value={searchText}
            onChangeText={setSearchText}
            style={{ flex: 1, fontFamily: "Poppins-Regular", fontSize: 14, color: "#001328" }}
          />
        </View>
      </View>

      {/* Section label */}
      <Text className="heading-4 text-text-primary px-4 mb-3">Popular</Text>

      {/* Language list */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.code}
        renderItem={renderLanguage}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Confirm button */}
      <View className="px-4 pt-2">
        <TouchableOpacity
          className="btn-primary"
          activeOpacity={0.85}
          disabled={!selectedCode}
          style={{ opacity: selectedCode ? 1 : 0.45 }}
          onPress={() => {
            if (selectedCode) {
              posthog.capture("language_selected", { language_code: selectedCode });
              setSelectedLanguage(selectedCode as LanguageCode);
              router.replace("/");
            }
          }}
        >
          <Text className="body-lg font-poppins-semibold text-white">
            {selectedCode ? "Start Learning" : "Select a Language"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Earth illustration */}
      <Image
        source={images.earth}
        style={{ width: "100%", height: 160 }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}
