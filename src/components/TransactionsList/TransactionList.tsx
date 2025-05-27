import TransactionItem from "@/components/TransactionItem/TransactionItem";
import { ScrollView, StyleSheet } from "react-native";

const teste = [
  {
    id: 1,
    title: "Transação 1",
    amount: 100,
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  }
]


export default function TransactionList() {
  return (
    <ScrollView style={styles.container}>
      {Array.from(teste).map((transaction) => (
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
    padding: 16,
    flex: 1,
    maxHeight: "100%",
  }
})
