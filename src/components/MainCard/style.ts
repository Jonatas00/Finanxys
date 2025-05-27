import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonDefault,
    height: 150,
    margin: 16,
    borderRadius: 10,
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
  },
  text: {
    color: colors.textPrimary,
    fontSize: 24,
    padding: 16,
  },
})
