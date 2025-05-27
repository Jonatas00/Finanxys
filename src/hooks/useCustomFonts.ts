import { useFonts } from "expo-font";

function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    "kanit": require("@/assets/fonts/Kanit-Regular.ttf"),
    "kanit-regular": require("@/assets/fonts/Kanit-Regular.ttf"),
  });

  return fontsLoaded;

};

export default useCustomFonts();