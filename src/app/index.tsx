import Header from "@/components/Header/Header";
import MainCard from "@/components/MainCard/MainCard";
import TransactionList from "@/components/TransactionsList/TransactionList";
import { colors } from "@/constants/colors";
import useCustomFonts from "@/hooks/useCustomFonts";
import { StyleSheet, View } from "react-native";

export default function Index() {
  useCustomFonts()

  return (
    <View style={style.container}>
      <Header />

      <MainCard />
      <TransactionList />

    </View >
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  }
});