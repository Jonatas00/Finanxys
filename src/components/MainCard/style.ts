import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
