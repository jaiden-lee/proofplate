import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function FontProvider({ children }: { children: React.ReactNode }) {
    const [fontsLoaded, fontError] = useFonts({
        "Poppins-Regular": require("../../../assets/fonts/poppins/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../../../assets/fonts/poppins/Poppins-SemiBold.ttf")
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        children
    );
}