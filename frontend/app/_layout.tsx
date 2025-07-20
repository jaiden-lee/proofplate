import { Stack } from "expo-router";
import "../src/styles/global.css";
import FontProvider from "../src/components/providers/font-provider";

export default function RootLayout() {
  return (
    <FontProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="camera" options={{ presentation: "modal" }} />
      </Stack>
    </FontProvider>
  );
}