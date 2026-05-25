import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

type TabConfig = {
  name: string;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  iconOutline: React.ComponentProps<typeof Ionicons>["name"];
};

const TABS: TabConfig[] = [
  { name: "index", label: "Home", icon: "home", iconOutline: "home-outline" },
  { name: "learn", label: "Learn", icon: "book", iconOutline: "book-outline" },
  {
    name: "ai-teacher",
    label: "AI Teacher",
    icon: "headset",
    iconOutline: "headset-outline",
  },
  {
    name: "chat",
    label: "Chat",
    icon: "chatbubble",
    iconOutline: "chatbubble-outline",
  },
  {
    name: "profile",
    label: "Profile",
    icon: "person",
    iconOutline: "person-outline",
  },
];

const PILL_SIZE = 46;
const PILL_TOP = 14;
const BAR_HEIGHT = 76;

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const tabWidth = width / state.routes.length;

  const pillX = useSharedValue(
    state.index * tabWidth + (tabWidth - PILL_SIZE) / 2
  );

  const pillStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: pillX.value }],
  }));

  useEffect(() => {
    pillX.value = withTiming(
      state.index * tabWidth + (tabWidth - PILL_SIZE) / 2,
      { duration: 220 }
    );
  }, [state.index, tabWidth]);

  return (
    <View
      style={[
        styles.outerContainer,
        { paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.innerContainer}>
        {/* Animated sliding pill — rendered behind tab items */}
        <Animated.View style={[styles.pill, pillStyle]} />

        {state.routes.map((route, index) => {
          const tab =
            TABS.find((t) => t.name === route.name) ?? TABS[0];
          const isActive = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabItem}
              activeOpacity={0.7}
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              }}
            >
              <View style={styles.iconWrapper}>
                <Ionicons
                  name={isActive ? tab.icon : tab.iconOutline}
                  size={22}
                  color={isActive ? "#FFFFFF" : "#9CA3AF"}
                />
              </View>
              <Text
                style={[styles.label, isActive && styles.labelActive]}
                numberOfLines={1}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  innerContainer: {
    flexDirection: "row",
    height: BAR_HEIGHT,
    alignItems: "flex-start",
    paddingTop: PILL_TOP,
    position: "relative",
  },
  pill: {
    position: "absolute",
    top: PILL_TOP,
    width: PILL_SIZE,
    height: PILL_SIZE,
    borderRadius: PILL_SIZE / 2,
    backgroundColor: "#6C4EF5",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  iconWrapper: {
    width: PILL_SIZE,
    height: PILL_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 2,
  },
  labelActive: {
    fontFamily: "Poppins-Medium",
    color: "#6C4EF5",
  },
});
