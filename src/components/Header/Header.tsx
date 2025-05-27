import { colors } from "@/constants/colors";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./style";

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="menu"
        color={colors.buttonText}
        onPress={() => console.warn("Clicou no Hamburger2")}
      />
      <Text style={[styles.title]}>
        Finanxy$
      </Text>
    </View>
  );
}
