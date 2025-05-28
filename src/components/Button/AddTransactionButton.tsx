import { colors } from "@/utils/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


export default function AddTransactionButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonDefault,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50
  },
  title: {
    color: colors.buttonText,
    fontSize: 48
  }
})