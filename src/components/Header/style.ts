import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  icon: {
    position: "absolute",
    left: 16,
    fontSize: 36,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: colors.textPrimary
  },
});
