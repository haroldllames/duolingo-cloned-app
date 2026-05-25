import "../../global.css";

import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { Stack, useGlobalSearchParams, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PostHogProvider } from "posthog-react-native";
import { useEffect, useRef } from "react";

import { posthog } from "@/lib/posthog";

const SAFE_ROUTE_PARAMS = ["lessonId", "unitId", "languageCode"] as const;

function filterSafeParams(params: Record<string, string | string[] | undefined>) {
  return Object.entries(params).reduce<Record<string, string>>((acc, [key, value]) => {
    if (!SAFE_ROUTE_PARAMS.includes(key as any) || value == null) return acc;
    acc[key] = Array.isArray(value) ? value.join(",") : value;
    return acc;
  }, {});
}

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const previousPathname = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      const safeParams = filterSafeParams(params);
      posthog.screen(pathname, {
        pathname,
        previous_screen: previousPathname.current ?? null,
        ...safeParams,
      });
      previousPathname.current = pathname;
    }
  }, [pathname, params]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <PostHogProvider
      client={posthog}
      autocapture={{
        captureScreens: false,
        captureTouches: true,
        propsToCapture: ["testID"],
        maxElementsCaptured: 20,
      }}
    >
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <Stack screenOptions={{ headerShown: false }} />
      </ClerkProvider>
    </PostHogProvider>
  );
}
