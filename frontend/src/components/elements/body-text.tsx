import { Text } from "react-native";

export default function BodyText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <Text className={`font-poppins ${className}`}>
            {children}
        </Text>
    );
}