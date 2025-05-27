import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.buttonDefault,
    height: 80,
    paddingHorizontal: 8,
    marginVertical: 8,
    borderRadius: 8,
    boxShadow: colors.boxShadow,
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
    fontSize: 20,
    color: colors.light
  }
});
