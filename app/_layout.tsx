import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { AppProvider, useAppContext } from "@/hooks/useContextHook";
import Splash from "./splash/Splash";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    if (loaded) {
      const timeoutId = setTimeout(() => {
        SplashScreen.hideAsync();
        setShowApp(true);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [loaded]);

  if (!showApp) {
    return <Splash />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <AppProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="data"
            options={{
              title: "Units",
              headerBackButtonMenuEnabled: false,
              headerTitleStyle: { fontSize: 20 },
              headerBackTitle: "<-",
              headerTintColor: "#000000",
              headerStyle: {
                backgroundColor: "#ffffff",
              },
              headerTitleAlign: "center",
              headerShadowVisible: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    </AppProvider>
  );
}
