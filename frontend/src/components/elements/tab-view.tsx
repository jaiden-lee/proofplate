import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderText from "@/src/components/elements/header-text";
import { View } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TabView({ children, className = "", headerText }: { children: React.ReactNode, className?: string, headerText: string }) {
    const insets = useSafeAreaInsets();

    return (
        <View className={`flex-1 bg-white`} style={{ paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }}>
            <View className={`flex-1 p-4 ${className}`}>
                <HeaderText className="text-3xl">{headerText}</HeaderText>
                {children}
            </View>
            <Link href="/camera" asChild>
                <TouchableOpacity className="absolute bottom-4 right-4 bg-black p-5 rounded-full">
                    <Feather name="plus" size={24} color="white" />
                </TouchableOpacity>
            </Link>
        </View>
    );
}