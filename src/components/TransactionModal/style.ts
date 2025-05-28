import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
  },
  modal: {
    width: 500,
    height: 500,
    backgroundColor: colors.modalPrimary
  }
})