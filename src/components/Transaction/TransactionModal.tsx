import { colors } from "@/utils/colors";
import { BlurView } from "expo-blur";
import { Modal, StyleSheet, Text, View } from "react-native";

export default function TransactionModal() {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={false}>
      <BlurView
        intensity={100}
        tint="dark"
        style={styles.centerView}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Adicionar Gasto</Text>
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
  }
})