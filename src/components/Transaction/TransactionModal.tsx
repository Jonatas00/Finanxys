import { colors } from "@/utils/colors";
import { BlurView } from "expo-blur";
import { Modal, StyleSheet, View } from "react-native";

export default function TransactionModal() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={false}>
      <BlurView
        intensity={100}
        tint="dark"
        style={styles.centerView}
      >
        <View style={styles.modal}>

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
  }
})