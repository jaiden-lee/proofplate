import { Slot } from "expo-router";
import "../src/styles/global.css";
import FontProvider from "../src/components/providers/font-provider";


export default function RootLayout() {
  return (
    <FontProvider>
      <Slot />
    </FontProvider>
  );
}