import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";


export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "black",
                    tabBarLabelStyle: { fontFamily: "Poppins-SemiBold" },
                }}>
                <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: ({ color }) => <Feather name="home" color={color} size={23} /> }} />
                <Tabs.Screen name="progress" options={{ title: "Progress", tabBarIcon: ({ color }) => <Feather name="bar-chart" color={color} size={23} /> }} />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: "Settings",
                        tabBarIcon: ({ color }) => <Feather name="settings" color={color} size={23} />,
                    }}
                />
            </Tabs>
        </>
    );
}