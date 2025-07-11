import Header from "@/components/Header/Header";
import MainCard from "@/components/Cards/MainCard";
import TransactionList from "@/components/Transaction/TransactionList";
import { colors } from "@/utils/colors";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Header />
      <MainCard />
      <TransactionList />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
