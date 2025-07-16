import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabsLayout() {
  return <Tabs screenOptions={{ headerShown: false }} >
    <Tabs.Screen name="home" options={{ title: "Home" }} />
    <Tabs.Screen name="progress" options={{ title: "Progress" }} />
    <Tabs.Screen name="settings" options={{ title: "Settings" }} />
  </Tabs>
}