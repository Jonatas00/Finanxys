import { useModalStore } from "@/store/useModalStore";
import { colors } from "@/utils/colors";
import { BlurView } from "expo-blur";
import { Modal, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function TransactionModal() {
  const { isModalOpen, closeModal } = useModalStore()


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalOpen}>
      <BlurView
        intensity={100}
        tint="dark"
        style={styles.centerView}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Adicionar Gasto</Text>
          <Icon style={styles.closeButton} name="x" onPress={closeModal}></Icon>
        </View>
      </BlurView>

    </Modal>
  )
}

const styles = StyleSheet.create({
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
    padding: 8
  },
  title: {
    color: colors.titleText,
    textAlign: "center",
    fontSize: 24,
  },
  closeButton: {
    color: colors.textPrimary,
    fontSize: 40,
    position: "absolute",
    right: 0,
    padding: 8
  }
})