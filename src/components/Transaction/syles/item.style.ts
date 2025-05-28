import { colors } from "@/utils/colors";
import { StyleSheet, } from "react-native";

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
  },
  view: {
    flex: 1,
    flexWrap: "nowrap",
    justifyContent: "center",
  },
  amountView: {
    alignItems: "flex-end",
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  date: {
    color: colors.textSecondary,
    fontFamily: "roboto-light"
  },
  amount: {
    fontSize: 20,
    color: colors.light,
    fontFamily: "roboto-regular"
  }
});
