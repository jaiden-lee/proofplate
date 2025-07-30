import { View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import BodyText from "@/src/components/elements/body-text";
import HeaderText from "@/src/components/elements/header-text";
import { useRouter } from "expo-router";
import { Linking } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

export default function Camera() {
    const insets = useSafeAreaInsets();
    const [facing, setFacing] = useState<"front" | "back">("back");
    const [permission, requestPermission] = useCameraPermissions();
    const router = useRouter();
    const cameraRef = useRef<CameraView>(null);

    if (!permission) {
        return <View className="flex-1 bg-black" />
    }

    const handlePermission = async () => {
        if (permission.canAskAgain) {
            await requestPermission();
        } else {
            await Linking.openSettings();
        }
    }

    const toggleFacing = () => {
        setFacing(facing === "front" ? "back" : "front");
    }

    if (!permission.granted) {
        return (
            <View className="flex-1 bg-black items-center justify-center p-4 gap-8" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
                <BodyText className="text-white text-xl text-center">We need your permission to show the camera</BodyText>
                <TouchableOpacity onPress={handlePermission} className="bg-white p-4 rounded-full">
                    <HeaderText className="text-black text-lg">Grant Permission</HeaderText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()}>
                    <HeaderText className="text-white text-lg">Go Back</HeaderText>
                </TouchableOpacity>
            </View>
        );
    }

    const takePhoto = async () => {
        const photo = await cameraRef.current?.takePictureAsync();
        console.log(photo);
    }

    return (
        <View className="flex-1 bg-black" style={{ paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom }}>
            <CameraView style={{ flex: 1 }} facing={facing} ref={cameraRef} />

            <View className="absolute top-0 left-0 right-0 bottom-0" style={{ marginTop: insets.top, marginLeft: insets.left, marginRight: insets.right, marginBottom: insets.bottom }}>
                <TouchableOpacity onPress={() => router.back()} className="absolute top-4 left-4 bg-[rgba(255,255,255,0.2)] p-4 rounded-full">
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>

                <View
                    className="absolute bottom-8 left-0 right-0 items-center"
                >
                    {/* Row container for centering */}
                    <View className="flex-row items-center justify-center w-full relative">
                        {/* Center shutter button */}
                        <TouchableOpacity
                            onPress={takePhoto}
                            className="bg-none p-1 rounded-full border-2 border-white"
                        >
                            <View className="bg-white w-16 h-16 rounded-full" />
                        </TouchableOpacity>

                        {/* Rotate Icon – aligned vertically with shutter button */}
                        <TouchableOpacity
                            onPress={toggleFacing}
                            className="absolute right-8 bg-[rgba(255,255,255,0.2)] p-4 rounded-full"
                        >
                            <FontAwesome6 name="arrows-rotate" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}