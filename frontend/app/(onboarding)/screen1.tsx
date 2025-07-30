import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import HeaderText from "@/src/components/elements/header-text";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import BodyText from "@/src/components/elements/body-text";

export default function Screen1() {
    const [page, setPage] = useState(0);
    const insets = useSafeAreaInsets();
    const bottomPosition = insets.bottom;

    const handlePageChange = (event: any) => {
        setPage(event.nativeEvent.position);
    };

    return (
        <View className="flex-1 bg-white">
            <Image
                source={require("@/assets/images/onboarding/screen1.png")}
                style={{ width: "100%", height: "50%" }}
                contentFit="cover"
            />

            <LinearGradient
                colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]}
                style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%" }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1.2 }}
            />

            <View className="absolute bottom-0 left-0 right-0 h-[55%] mt-auto gap-8 rounded-3xl z-10 bg-white" style={{ paddingBottom: bottomPosition }}>
                <PagerView initialPage={page} style={{ flex: 1 }} onPageSelected={handlePageChange}>
                    <View key="1" className="p-8 gap-4">
                        <HeaderText className="text-center text-2xl">Eat more greens</HeaderText>
                        <BodyText className="text-center">Start a simple habit by snapping a real-time photo of your veggie-packed meal.</BodyText>
                    </View>
                    <View key="2" className="p-8 gap-4">
                        <HeaderText className="text-center text-2xl">Prove it with your camera</HeaderText>
                        <BodyText className="text-center">Your camera is the only way in. No uploads, no shortcuts—just daily veggie proof.</BodyText>
                    </View>
                    <View key="3" className="p-8 gap-4">
                        <HeaderText className="text-center text-2xl">Build your streak. Earn your badges.</HeaderText>
                        <BodyText className="text-center">Turn veggies into a game. Hit milestones, unlock rewards, and stay on track—one bite at a time.</BodyText>
                    </View>
                </PagerView>

                {/* Page Indicator */}
                <View className="flex-row justify-center items-center gap-2">
                    <View className={`w-2 h-2 rounded-full ${page === 0 ? "bg-black" : "bg-gray-300"}`}></View>
                    <View className={`w-2 h-2 rounded-full ${page === 1 ? "bg-black" : "bg-gray-300"}`}></View>
                    <View className={`w-2 h-2 rounded-full ${page === 2 ? "bg-black" : "bg-gray-300"}`}></View>
                </View>

                <TouchableOpacity className="bg-black p-4 rounded-full mx-8 mb-4">
                    <HeaderText className="text-white text-center text-lg">Next</HeaderText>
                </TouchableOpacity>
            </View>
        </View>
    );
}