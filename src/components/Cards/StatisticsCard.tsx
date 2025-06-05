import { useTransactionStore } from "@/store/useTransactionStore";
import { StyleSheet, View } from "react-native";
import MonthChart from "../Chart/MonthChart";

export default function StatisticsCard() {
  const transactions = useTransactionStore((state) => state.transactions);

  return (
    <View style={styles.container}>
      <MonthChart />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
})