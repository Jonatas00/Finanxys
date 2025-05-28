import { colors } from "@/utils/colors";
import { StyleSheet, Text, View } from "react-native";

export default function MainCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonDefault,
    height: 150,
    margin: 16,
    borderRadius: 10,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 24,
    padding: 16,
  },
})
