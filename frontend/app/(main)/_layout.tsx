import { Stack } from "expo-router";


export default function MainLayout() {

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="camera" options={{ presentation: "modal" }} />
    </Stack>
  );
}