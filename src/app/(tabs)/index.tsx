import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Image as ExpoImage } from "expo-image";
import { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePostHog } from "posthog-react-native";

import { images } from "@/constants/images";
import { getLanguageByCode } from "@/data/languages";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/useLanguageStore";

const DAILY_XP = 15;
const DAILY_XP_GOAL = 20;
const STREAK = 12;

const GREETINGS: Record<string, string> = {
  es: "Hola",
  fr: "Bonjour",
  jp: "こんにちは",
  de: "Hallo",
};

type PlanItem = {
  id: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  subtitle: string;
  completed: boolean;
  iconBg: string;
};

const TODAY_PLAN: PlanItem[] = [
  {
    id: "1",
    icon: "book",
    label: "Lesson",
    subtitle: "At the café",
    completed: true,
    iconBg: "#6C4EF5",
  },
  {
    id: "2",
    icon: "headset",
    label: "AI Conversation",
    subtitle: "Talk about your day",
    completed: false,
    iconBg: "#6C4EF5",
  },
  {
    id: "3",
    icon: "chatbubble",
    label: "New words",
    subtitle: "10 words",
    completed: false,
    iconBg: "#FF4D8D",
  },
];

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();
  const posthog = usePostHog();

  useEffect(() => {
    if (user?.id) {
      const properties: Record<string, string> = {};
      if (user.primaryEmailAddress?.emailAddress) {
        properties.email = user.primaryEmailAddress.emailAddress;
      }
      if (user.fullName) properties.name = user.fullName;
      if (user.firstName) properties.first_name = user.firstName;
      posthog.identify(user.id, { $set: properties });
    }
  }, [user?.id]);

  const firstName = user?.firstName ?? "there";
  const language = selectedLanguage ? getLanguageByCode(selectedLanguage) : null;
  const units = selectedLanguage ? getUnitsByLanguage(selectedLanguage) : [];
  const currentUnit = units[0];

  const greeting = selectedLanguage
    ? (GREETINGS[selectedLanguage] ?? "Hello")
    : "Hello";

  const xpPercent = `${Math.round((DAILY_XP / DAILY_XP_GOAL) * 100)}%` as `${number}%`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Header ── */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
          <View className="flex-row items-center gap-2">
            {language ? (
              <ExpoImage
                source={{ uri: language.flag }}
                style={styles.flag}
                contentFit="cover"
              />
            ) : null}
            <Text className="heading-3 text-text-primary">
              {greeting}, {firstName}! 👋
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image source={images.streakFire} style={styles.fireIcon} />
              <Text className="heading-4 text-streak">{STREAK}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="notifications-outline" size={24} color="#001328" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 gap-4">
          {/* ── Daily Goal Card ── */}
          <View style={styles.dailyGoalCard}>
            <View style={{ flex: 1 }}>
              <Text className="body-sm text-text-secondary">Daily goal</Text>
              <View className="flex-row items-baseline gap-1 mt-1">
                <Text className="heading-2 text-text-primary">{DAILY_XP}</Text>
                <Text className="body-md text-text-secondary">
                  / {DAILY_XP_GOAL} XP
                </Text>
              </View>
              <View style={styles.progressTrack} className="mt-3">
                <View style={[styles.progressFill, { width: xpPercent }]} />
              </View>
            </View>
            <Image
              source={images.treasure}
              style={styles.treasureImage}
              resizeMode="contain"
            />
          </View>

          {/* ── Continue Learning Card ── */}
          {language && currentUnit ? (
            <View style={styles.continueCard}>
              <View style={{ flex: 1, gap: 4 }}>
                <Text style={styles.continueLabelText}>Continue learning</Text>
                <Text className="heading-2 text-white">{language.name}</Text>
                <Text style={styles.continueSubText}>
                  A1 • Unit {currentUnit.order}
                </Text>
                <TouchableOpacity
                  style={styles.continueBtn}
                  activeOpacity={0.85}
                  onPress={() =>
                    posthog.capture("continue_learning_tapped", {
                      language: selectedLanguage,
                      unit_order: currentUnit.order,
                    })
                  }
                >
                  <Text className="heading-4" style={{ color: "#6C4EF5" }}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={images.palace}
                style={styles.palaceImage}
                resizeMode="contain"
              />
            </View>
          ) : null}

          {/* ── Today's Plan ── */}
          <View>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="heading-3 text-text-primary">Today's plan</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="body-md text-lingua-purple font-poppins-medium">
                  View all
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.planCard}>
              {TODAY_PLAN.map((item, index) => (
                <View key={item.id}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                      posthog.capture("today_plan_item_tapped", {
                        item_label: item.label,
                        item_completed: item.completed,
                      })
                    }
                  >
                  <View className="flex-row items-center gap-3 py-3">
                    <View
                      style={[styles.planIconWrap, { backgroundColor: item.iconBg }]}
                    >
                      <Ionicons name={item.icon} size={20} color="#fff" />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text className="heading-4 text-text-primary">
                        {item.label}
                      </Text>
                      <Text className="body-sm text-text-secondary">
                        {item.subtitle}
                      </Text>
                    </View>
                    {item.completed ? (
                      <View style={styles.checkDone}>
                        <Ionicons name="checkmark" size={16} color="#fff" />
                      </View>
                    ) : (
                      <View style={styles.checkEmpty} />
                    )}
                  </View>
                  </TouchableOpacity>
                  {index < TODAY_PLAN.length - 1 && (
                    <View style={styles.divider} />
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* ── Next Up ── */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => posthog.capture("next_up_ai_video_call_tapped")}
          >
          <View style={styles.nextUpCard}>
            <View style={{ flex: 1 }}>
              <Text className="caption text-text-secondary">Next up</Text>
              <Text className="heading-3 text-text-primary mt-1">
                AI Video Call
              </Text>
              <Text className="body-sm text-text-secondary mt-1">
                Practice speaking
              </Text>
            </View>
            <View>
              <ExpoImage
                source={{ uri: "https://i.pravatar.cc/80?img=47" }}
                style={styles.avatar}
                contentFit="cover"
              />
              <View style={styles.videoIconBadge}>
                <Ionicons name="videocam" size={12} color="#fff" />
              </View>
            </View>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 32,
  },
  flag: {
    width: 30,
    height: 22,
    borderRadius: 4,
  },
  fireIcon: {
    width: 22,
    height: 22,
  },
  // Daily Goal
  dailyGoalCard: {
    backgroundColor: "#FFF5E8",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  progressTrack: {
    height: 8,
    backgroundColor: "#FFD9A8",
    borderRadius: 100,
    overflow: "hidden",
  },
  progressFill: {
    height: 8,
    backgroundColor: "#FF8A00",
    borderRadius: 100,
  },
  treasureImage: {
    width: 72,
    height: 72,
  },
  // Continue Learning
  continueCard: {
    backgroundColor: "#6C4EF5",
    borderRadius: 20,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    gap: 8,
  },
  continueLabelText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "rgba(255,255,255,0.75)",
  },
  continueSubText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "rgba(255,255,255,0.85)",
  },
  continueBtn: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 22,
    alignSelf: "flex-start",
    marginTop: 6,
  },
  palaceImage: {
    width: 110,
    height: 120,
  },
  // Today's Plan
  planCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
  },
  planIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkDone: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#4D88FF",
    alignItems: "center",
    justifyContent: "center",
  },
  checkEmpty: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#E5E7EB",
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F4F6",
  },
  // Next Up
  nextUpCard: {
    backgroundColor: "#E8FAF1",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
  },
  videoIconBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#21C16B",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
});
