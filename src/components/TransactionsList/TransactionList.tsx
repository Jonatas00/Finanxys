import TransactionItem from "@/components/TransactionItem/TransactionItem";
import { ScrollView, StyleSheet } from "react-native";

const transactions = [
  {
    id: 1,
    title: "Transação 1",
    amount: 100,
    date: new Date(),
  },
  {
    id: 2,
    title: "Transação 2",
    amount: 200,
    date: new Date(),
  },
  {
    id: 3,
    title: "Transação 2",
    amount: 200,
    date: new Date(),
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
