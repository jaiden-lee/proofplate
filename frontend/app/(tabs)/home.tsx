import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "@/src/components/elements/header-text";

export default function Home() {
    return (
        <SafeAreaView className="flex-1 p-4">
            <HeaderText className="text-3xl">Home</HeaderText>
        </SafeAreaView>
    );
}