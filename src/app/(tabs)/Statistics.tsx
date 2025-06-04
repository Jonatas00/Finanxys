import Header from "@/components/Header/Header";
import { colors } from "@/utils/colors";
import { StyleSheet, Text, View } from "react-native";
export default function Statistics() {

  return (
    <View style={styles.safeArea}>
      <Header />
      <Text>Statistics</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});