import { useTransactionStore } from "@/store/useTransactionStore";
import { Transaction, TransactionCategory } from "@/types/transaction";
import { colors } from "@/utils/colors";
import { StyleSheet, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

export default function MainCard() {
  const transactions = useTransactionStore((state) => state.transactions);

  const income = transactions
    .filter((t: Transaction) => t.category === TransactionCategory.INCOME)
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const expense = transactions
    .filter((t: Transaction) => t.category === TransactionCategory.EXPENSE)
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const hasData = income > 0 || expense > 0;

  const chartData = hasData
    ? [
      { value: income, color: colors.light },
      { value: expense, color: colors.danger },
    ]
    : [{ value: 1, color: colors.light }];

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <PieChart
          widthAndHeight={125}
          series={chartData}
          cover={0.7}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Receita: R$ {income.toFixed(2)}</Text>
        <Text style={styles.text}>Despesa: R$ {expense.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardPrimary,
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    margin: 16,
    borderRadius: 10,
    padding: 16,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    textAlign: "left"
  },
  text: {
    color: colors.textPrimary,
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginBottom: 8,
  },
});