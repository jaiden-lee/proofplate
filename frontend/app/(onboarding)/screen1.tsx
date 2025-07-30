import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import HeaderText from "@/src/components/elements/header-text";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import BodyText from "@/src/components/elements/body-text";
import { Link } from "expo-router";
import OnboardingPagerViewPage from "@/src/components/elements/carousel/onboarding-pager-view-page";
import PagerViewPageIndicator from "@/src/components/elements/carousel/pager-view-page-indicator";

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

            {/* Image overlay */}
            <LinearGradient
                colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]}
                style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%" }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1.2 }}
            />

            <View className="absolute bottom-0 left-0 right-0 h-[55%] mt-auto gap-8 rounded-3xl z-10 bg-white" style={{ paddingBottom: bottomPosition }}>
                <PagerView initialPage={page} style={{ flex: 1 }} onPageSelected={handlePageChange}>
                    <OnboardingPagerViewPage 
                        key="1" 
                        title="Eat more greens" 
                        description="Start a simple habit by snapping a real-time photo of your veggie-packed meal." 
                    />
                    <OnboardingPagerViewPage 
                        key="2" 
                        title="Prove it with your camera" 
                        description="Your camera is the only way in. No uploads, no shortcuts—just daily veggie proof." 
                    />
                    <OnboardingPagerViewPage 
                        key="3" 
                        title="Build your streak. Earn your badges." 
                        description="Turn veggies into a game. Hit milestones, unlock rewards, and stay on track—one bite at a time." 
                    />
                </PagerView>

                <PagerViewPageIndicator page={page} totalPages={3} />

                <Link href="/screen2" asChild>
                    <TouchableOpacity className="bg-black p-4 rounded-full mx-8 mb-4" activeOpacity={.8}>
                        <HeaderText className="text-white text-center text-lg">Next</HeaderText>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}