import { useTransactionStore } from "@/store/useTransactionStore";
import { colors } from "@/utils/colors";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
export default function Header() {
  const transactions = useTransactionStore()

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="menu"
        onPress={() => transactions.clearTransactions()}
      />
      <Text style={[styles.title]}>
        Finanxy$
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 75
  },
  icon: {
    zIndex: 1,
    position: "absolute",
    left: 16,
    fontSize: 40,
    color: colors.buttonText,
  },
  title: {
    color: colors.textPrimary,
    flex: 1,
    textAlign: "center",
    fontFamily: "kanit-regular",
    fontSize: 40
  }
});
