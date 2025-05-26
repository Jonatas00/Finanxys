import { colors } from "@/constants/colors";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./style";

export function Header() {
  return (
    <View style={styles.container}>
      <Icon name="menu" size={28} color={colors.buttonText} onPress={() => console.warn("Clicou no Hamburger")} />
      <Text style={styles.title}>Finanxy$</Text>
    </View>
  );
}