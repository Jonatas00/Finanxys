import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    width: 360,
    height: 500,
    backgroundColor: colors.modalPrimary,
    borderRadius: 8,
  }
})