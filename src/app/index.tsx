import { colors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Começe adicionando seu primeiro gasto</Text>

    </View >
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.textPrimary,
  }
});