import TransactionItem from "@/components/TransactionItem/TransactionItem";
import { Transaction, TransactionCategory } from "@/types/transaction";
import { ScrollView, StyleSheet } from "react-native";

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Transação 1",
    amount: 100,
    date: new Date(),
    category: TransactionCategory.EXPENSE
  },
  {
    id: 2,
    title: "Transação 2",
    amount: 200,
    date: new Date(),
    category: TransactionCategory.EXPENSE
  },
  {
    id: 3,
    title: "Salário",
    amount: 3000000,
    date: new Date(),
    category: TransactionCategory.INCOME
  }

]

export default function TransactionList() {
  return (
    <ScrollView style={styles.container}>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          id={transaction.id}
          title={transaction.title}
          amount={transaction.amount}
          date={transaction.date}
          category={transaction.category}
        />
      ))}

    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  }
})
