import { colors } from "@/utils/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
}


export function AddTransactionButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.background} onPress={onPress}>
      <Text style={styles.text}>Adicionar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.buttonDefault
  },
  text: {
    color: colors.buttonText
  }
})