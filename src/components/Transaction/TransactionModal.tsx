import { BlurView } from "expo-blur"
import { Modal, View } from "react-native"
import { styles } from "./syles/modal.style"

export default function TransactionModal() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}>
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