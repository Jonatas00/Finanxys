import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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