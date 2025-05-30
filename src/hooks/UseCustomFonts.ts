import { useFonts } from "expo-font";

export default function UseCustomFonts() {
  const [fontsLoaded] = useFonts({
    "kanit-regular": require("@/assets/fonts/Kanit-Regular.ttf"),
    "kanit-light": require("@/assets/fonts/Kanit-Light.ttf"),

    "roboto-light": require("@/assets/fonts/Roboto-Light.ttf"),
    "roboto-medium": require("@/assets/fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("@/assets/fonts/Roboto-Regular.ttf"),
  });

  return fontsLoaded;
};