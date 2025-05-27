import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 75
  },
  icon: {
    zIndex: 1,
    position: "absolute",
    left: 16,
    fontSize: 40,
    color: colors.buttonText,
  },
  title: {
    color: colors.textPrimary,
    flex: 1,
    textAlign: "center",
    fontFamily: "kanit",
    fontSize: 40
  }
});
