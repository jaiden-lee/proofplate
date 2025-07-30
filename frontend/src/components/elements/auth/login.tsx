import { Text, TextInput, TouchableOpacity, View } from "react-native";
import StackView from "../stack-view";
import HeaderText from "../header-text";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../body-text";

export default function LoginComponent() {
    return (
        <StackView>
            {/* Header */}
            <View className="flex-row justify-center items-center w-full p-4">
                {/* X button */}
                <TouchableOpacity onPress={() => router.back()} className="absolute left-4" >
                    <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>

                <HeaderText className="text-center text-3xl">Sign In</HeaderText>
            </View>

            {/* Form */}
            <View className="justify-center items-center gap-4 p-8">


                <View className="w-full">
                    <TextInput placeholder="Email" className="border border-gray-300 p-4 rounded-t-2xl font-poppins-semibold placeholder:text-gray-300"  multiline={false} textAlignVertical="center"/>
                    <TextInput placeholder="Password" className="border border-gray-300 p-4 border-t-0 rounded-b-2xl font-poppins-semibold placeholder:text-gray-300" secureTextEntry={true} multiline={false} textAlignVertical="center"/>
                </View>
                <TouchableOpacity className="bg-black rounded-2xl p-4 w-full">
                    <HeaderText className="text-white text-center text-lg">Sign In</HeaderText>
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
                    <TouchableOpacity className="bg-black rounded-md p-2">
                        <BodyText className="text-white">Sign in with Google</BodyText>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white rounded-md p-2">
                        <BodyText className="text-black">Sign in with Apple</BodyText>
                    </TouchableOpacity>
                </View>
            </View>


        </StackView>
    );
}