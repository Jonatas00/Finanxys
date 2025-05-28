import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/button.style";

export default function AddTransactionButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>+</Text>
    </TouchableOpacity>
  )
}