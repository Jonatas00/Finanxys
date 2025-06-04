import Index from "@/app/(tabs)/index";
import Statistics from "@/app/(tabs)/Statistics";
import { colors } from "@/utils/colors";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: colors.menuButtonBackground,
        width: "50%",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      drawerItemStyle: {
        borderRadius: 10
      },
      drawerActiveTintColor: colors.titleText,
      drawerInactiveTintColor: colors.textPrimary,
    }} drawerContent={(props) => (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={
          {
            flex: 1,
            justifyContent: "space-between",
          }
        }
      >

        <View>
          <DrawerItemList {...props} />
        </View>

        <View style={styles.footer}>
          <Button
            onPress={() => Linking.openURL("mailto:djonatas31@gmail.com")}
            style={styles.footerButton}
            textColor={colors.textPrimary}
          >
            <Text>Entre em contato</Text>
          </Button>
          <Text style={styles.footerText}>
            Versão 0.0.1
          </Text>
        </View>

      </ DrawerContentScrollView>
    )}>

      <Drawer.Screen
        name="Página Inicial"
        component={Index}
      />
      <Drawer.Screen
        name="Estatísticas"
        component={Statistics}
      />

    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  footer: {
    padding: 16,
    gap: 16,
  },
  footerButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.transparent,
    color: colors.textPrimary,
    borderRadius: 10
  },
  footerText: {
    color: colors.textPrimary,
    textAlign: "center"
  }
})