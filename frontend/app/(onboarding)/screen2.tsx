import { View, Text, TouchableOpacity, Image } from "react-native";
import StackView from "@/src/components/elements/stack-view";
import HeaderText from "@/src/components/elements/header-text";
import BodyText from "@/src/components/elements/body-text";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Screen2() {
    const insets = useSafeAreaInsets();
    const bottomPosition = insets.bottom;
    const topPosition = insets.top;

    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <StackView>
            {/* back arrow */}
            <TouchableOpacity className="absolute top-0 left-0 px-4" style={{ top: topPosition }} activeOpacity={.8} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="black" className="bg-gray-200 rounded-full p-2" />
            </TouchableOpacity>

            <View className="flex-1 justify-center items-center gap-4 p-8">
                <Image source={require("@/assets/images/proofplate.png")} className="w-32 h-32" resizeMode="contain" />
                <HeaderText className="text-center text-3xl text-lime-400">proofplate</HeaderText>
                <HeaderText className="text-center text-gray-300">
                    The fun and effective way to eat more greens!
                </HeaderText>
            </View>

            <View className="absolute bottom-0 left-0 right-0 items-center justify-center px-8 gap-4" style={{ bottom: bottomPosition }}>
                <Link href="/" asChild>
                    <TouchableOpacity className="bg-black p-4 rounded-full w-full" activeOpacity={.8}>
                        <HeaderText className="text-white text-center text-lg">Get Started</HeaderText>
                    </TouchableOpacity>
                </Link>

                <Link href="/login" asChild>
                    <TouchableOpacity className="bg-gray-200 p-4 rounded-full w-full" activeOpacity={.8}>
                        <HeaderText className="text-gray-400 text-center text-lg">I already have an account</HeaderText>
                    </TouchableOpacity>
                </Link>
            </View>
        </StackView>
    );
}