import { useEffect, useState } from "react";
import { Redirect, RelativePathString } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
    const [initialRoute, setInitialRoute] = useState<RelativePathString | null>(null);

    useEffect(() => {
        const checkOnboarding = async () => {
            const onboardingCompleted = await AsyncStorage.getItem("onboardingCompleted");
            if (onboardingCompleted) {
                setInitialRoute("./(main)/(tabs)/home");
            } else {
                setInitialRoute("./(onboarding)/screen1");
            }
        }

        checkOnboarding();
    }, []);

    if (!initialRoute) {
        return null;
    }

    return <Redirect href={initialRoute} />;
}