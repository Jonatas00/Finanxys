import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonDefault,
    height: 80,
    padding: 5,
    marginVertical: 8,
    borderRadius: 8,
    boxShadow: colors.boxShadow,
  },
  left: {

  },
  right: {

  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: "bold"
  },
  date: {
    color: colors.textPrimary,
  },
  amount: {
    color: colors.light
  }
});
