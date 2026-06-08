export default {
  expo: {
    name: "duolingo-app",
    slug: "duolingo-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "duolingoapp",
    userInterfaceStyle: "automatic",
    ios: {
      bundleIdentifier: "com.haroldllames.duolingoapp",
    },
    android: {
      package: "com.haroldllames.duolingoapp",
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      "expo-secure-store",
      "@clerk/expo",
      "@stream-io/video-react-native-sdk",
      [
        "@config-plugins/react-native-webrtc",
        {
          cameraPermission:
            "$(PRODUCT_NAME) needs camera access for video lessons.",
          microphonePermission:
            "$(PRODUCT_NAME) needs microphone access so the AI teacher can hear you.",
        },
      ],
      [
        "expo-build-properties",
        {
          android: { minSdkVersion: 24 },
        },
      ],
      [
        "expo-splash-screen",
        {
          backgroundColor: "#208AEF",
          android: {
            image: "./assets/images/splash-icon.png",
            imageWidth: 76,
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
      posthogHost: process.env.POSTHOG_HOST,
      streamApiKey: process.env.EXPO_PUBLIC_STREAM_API_KEY,
    },
  },
};
