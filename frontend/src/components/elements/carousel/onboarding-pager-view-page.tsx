import { View } from "react-native";
import HeaderText from "../header-text";
import BodyText from "../body-text";

export default function OnboardingPagerViewPage({ title, description }: { title: string, description: string }) {
    return (
        <View className="p-8 pt-12 gap-4">
            <HeaderText className="text-center text-3xl">{title}</HeaderText>
            <BodyText className="text-center text-gray-500">{description}</BodyText>
        </View>
    );
}
