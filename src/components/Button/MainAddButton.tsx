import { ModalType, useModalStore } from "@/store/useModalStore";
import { colors } from "@/utils/colors";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function MainAddButton() {
  const openModal = useModalStore((state) => state.openModal)

  return (
    <TouchableOpacity style={styles.button} onPress={() => openModal(ModalType.ADD)}>
      <Icon name={"plus"} size={40} color={colors.buttonText} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.buttonDefault,
    width: 60,
    height: 60,
    borderRadius: 100
  },
})