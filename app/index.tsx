import { StyleSheet, Text, View } from "react-native";

export default function Page() {
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
    backgroundColor: "#262626",
  },
  text: {
    color: "#fff",
  }
});