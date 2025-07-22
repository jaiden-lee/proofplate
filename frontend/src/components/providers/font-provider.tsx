import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Feather, FontAwesome6 } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function FontProvider({ children }: { children: React.ReactNode }) {
    const [fontsLoaded, fontError] = useFonts({
        "Poppins-Regular": require("../../../assets/fonts/poppins/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../../../assets/fonts/poppins/Poppins-SemiBold.ttf"),
        "Feather": Feather.font,
        "FontAwesome6": FontAwesome6.font
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