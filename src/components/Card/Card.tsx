import { Text, View } from "react-native";
import { styles } from "./style";

export function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Card Title</Text>
    </View>
  );
}