import { Card } from "@/components/Card/Card";
import { Header } from "@/components/Header/Header";
import { colors } from "@/constants/colors";
import { StyleSheet, View } from "react-native";

export default function Index() {
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
  },
  text: {
    color: colors.textPrimary,
  }
});