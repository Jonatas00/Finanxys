import { colors } from "@/utils/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
}


export function AddTransactionButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Adicionar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonDefault,
    height: 50,
    width: 100,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: colors.buttonText
  },

})