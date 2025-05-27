import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonDefault,
    height: 150,
    margin: 16,
    borderRadius: 8,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 24,
    padding: 16,
  },
})
