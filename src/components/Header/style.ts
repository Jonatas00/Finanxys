import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  icon: {
    zIndex: 1,
    position: "absolute",
    left: 16,
    fontSize: 36,
  },
  title: {
    color: colors.textPrimary,
    flex: 1,
    textAlign: "center",
    fontFamily: "Kanit",
    fontSize: 32
  }
});
