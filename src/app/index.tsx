import Header from "@/components/Header/Header";
import Card from "@/components/MainCard/MainCard";
import { colors } from "@/constants/colors";
import useCustomFonts from "@/hooks/useCustomFonts";
import { StyleSheet, View } from "react-native";

export default function Index() {
  useCustomFonts()

  return (
    <View style={style.container}>
      <Header />

      <Card />

    </View >
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  }
});