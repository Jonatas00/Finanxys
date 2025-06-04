import Index from "@/app/(tabs)/index";
import Statistics from "@/app/(tabs)/Statistics";
import { colors } from "@/utils/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false, drawerStyle: {
        backgroundColor: "rgba(32, 32, 32, 0.85)",
        width: "50%",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      drawerActiveTintColor: colors.titleText,
      drawerInactiveTintColor: colors.textPrimary,
    }
    } >
      <Drawer.Screen
        name="index"
        component={Index}
        options={{ title: "Página inicial" }}
      />
      <Drawer.Screen name="statistics" component={Statistics} options={{ title: "Estatísticas" }} />
    </Drawer.Navigator>
  );
}
