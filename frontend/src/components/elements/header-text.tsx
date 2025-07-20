import { Text } from "react-native";

export default function HeaderText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <Text className={`font-poppins-semibold ${className}`}>
            {children}
        </Text>
    );
}