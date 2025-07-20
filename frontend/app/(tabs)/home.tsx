import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "../../src/components/elements/header-text";

export default function Home() {
    return (
        <SafeAreaView>
            <View>
                <HeaderText>Home</HeaderText>
            </View>
        </SafeAreaView>
    );
}