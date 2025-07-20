import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function TabsLayout() {
    return (
        <View className="flex-1">
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "black",
                    tabBarLabelStyle: { fontFamily: "Poppins-SemiBold" },
                }}>
                <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: ({ color }) => <Feather name="home" color={color} size={23} /> }} />
                <Tabs.Screen name="progress" options={{ title: "Progress", tabBarIcon: ({ color }) => <Feather name="bar-chart" color={color} size={23} /> }} />
                <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: ({ color }) => <Feather name="settings" color={color} size={23} /> }} />
            </Tabs>
            <Link href="/camera" asChild>
                <TouchableOpacity className="absolute bottom-10 right-10 bg-black p-4 rounded-full">
                    <Feather name="camera" size={23} color="white" />
                </TouchableOpacity>
            </Link>
        </View>
    );
}