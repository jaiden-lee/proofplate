import { TextInput, TouchableOpacity, View } from "react-native";
import StackView from "../stack-view";
import HeaderText from "../header-text";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import BodyText from "../body-text";

export default function LoginComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isWrongCredentials, setIsWrongCredentials] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <StackView>
            {/* Header */}
            <View className="flex-row justify-center items-center w-full p-4">
                {/* X button */}
                <TouchableOpacity onPress={() => router.back()} className="absolute left-4" >
                    <Ionicons name="close" size={24} color="black" className="bg-gray-200 rounded-full p-2" />
                </TouchableOpacity>

                <HeaderText className="text-center text-3xl">Sign In</HeaderText>
            </View>

            {/* Form */}
            <View className="justify-center items-center gap-4 p-8 pt-4">


                <View className="w-full">
                    <TextInput placeholder="Email" className="border border-gray-300 p-4 rounded-t-2xl font-poppins-semibold placeholder:text-gray-300" multiline={false} textAlignVertical="center" value={email} onChangeText={setEmail} />
                    <View className="border border-gray-300 rounded-b-2xl border-t-0 flex-row items-center justify-between">
                        <TextInput placeholder="Password" className="p-4 flex-1 font-poppins-semibold placeholder:text-gray-300" secureTextEntry={!passwordVisible} multiline={false} textAlignVertical="center" value={password} onChangeText={setPassword} />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} className="p-4">
                            <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                        </TouchableOpacity>
                    </View>


                </View>

                {isWrongCredentials && <BodyText className="text-red-500 text-center text-lg">Wrong username or password</BodyText>}

                {/* sign in button */}
                <TouchableOpacity className="bg-black rounded-2xl p-4 w-full">
                    <HeaderText className="text-white text-center text-lg">Sign In</HeaderText>
                </TouchableOpacity>

                {/* forgot password */}
                <TouchableOpacity className="w-full flex-row items-center justify-center">
                    <HeaderText className="text-gray-500 text-lg">Forgot Password</HeaderText>
                </TouchableOpacity>

                <View className="w-full gap-2">
                    {/* divider between the two forms */}
                    <View className="flex-row items-center justify-center">
                        <View className="flex-1 h-px bg-gray-300" />
                        <HeaderText className="text-center px-2 text-gray-300">or</HeaderText>
                        <View className="flex-1 h-px bg-gray-300" />
                    </View>
                </View>

                {/* sign in with google vs sign in with apple */}
                <View className="w-full gap-2">
                    <TouchableOpacity className="border-2 border-gray-300 rounded-2xl p-4 w-full flex-row items-center justify-center gap-2">
                        <Image source={require("@/assets/images/auth/google-logo.svg")} style={{ width: 24, height: 24 }} contentFit="contain" />
                        <HeaderText className="text-black text-center text-lg">Sign in with Google</HeaderText>
                    </TouchableOpacity>
                </View>
            </View>


        </StackView>
    );
}