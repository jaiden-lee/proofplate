import { Stack } from "expo-router";
import "../src/styles/global.css";
import FontProvider from "../src/components/providers/font-provider";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <FontProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="camera" options={{ presentation: "modal" }} />
        </Stack>
      </FontProvider>
    </SafeAreaProvider>
  );
}