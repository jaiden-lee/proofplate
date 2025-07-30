import { View } from "react-native";

export default function PagerViewPageIndicator({ page, totalPages }: { page: number, totalPages: number }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index);

    return (
        <View className="flex-row justify-center items-center gap-2">
            {pages.map((pageIndex) => (
                <View key={pageIndex} className={`w-2 h-2 rounded-full ${pageIndex === page ? "bg-gray-600" : "bg-gray-300"}`}></View>
            ))}
        </View>
    );
}