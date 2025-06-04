import { colors } from "@/utils/colors";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Text style={styles.title}>Finanxy$</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  icon: {
    zIndex: 1,
    position: "absolute",
    left: 24,
    fontSize: 40,
    color: colors.buttonText,
  },
  title: {
    color: colors.textPrimary,
    flex: 1,
    textAlign: "center",
    fontFamily: "kanit-regular",
    fontSize: 40,
  },
});
