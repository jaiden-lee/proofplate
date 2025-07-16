import { Tabs, Link } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export default function TabsLayout() {

    return (
        <>
            <Link href="/camera" asChild>
                <TouchableOpacity style={{ position: "absolute", bottom: 150, right: 40, zIndex: 1000, backgroundColor: "white", borderRadius: 100, padding: 10 }}>
                    <Text>Camera</Text>
                </TouchableOpacity>
            </Link>
            <Tabs screenOptions={{ headerShown: false }} >
                <Tabs.Screen name="home" options={{ title: "Home" }} />
                <Tabs.Screen name="progress" options={{ title: "Progress" }} />
                <Tabs.Screen name="settings" options={{ title: "Settings" }} />
            </Tabs>
        </>
    );
}