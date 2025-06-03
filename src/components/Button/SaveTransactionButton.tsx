import { colors } from "@/utils/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
  disabled?: boolean;
};

export function SaveTransactionButton({ onPress, disabled = false }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>Salvar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonDefault,
    height: 50,
    width: 100,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "#555", // ou use `colors.buttonDisabled` se tiver definido
    opacity: 0.6,
  },
  text: {
    color: colors.buttonText,
  },
});
