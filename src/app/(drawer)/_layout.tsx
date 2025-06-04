import Index from "@/app/(drawer)/index";
import Statistics from "@/app/(drawer)/Statistics";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="index" component={Index} options={{ title: "Home" }} />
      <Drawer.Screen name="statistics" component={Statistics} options={{ title: "Estatísticas" }} />
    </Drawer.Navigator>
  );
}
