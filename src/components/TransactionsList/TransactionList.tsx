import TransactionItem from "@/components/TransactionItem/TransactionItem";
import { ScrollView, StyleSheet } from "react-native";

const transactions = [
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
  },
  {
    id: 3,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  },
  {
    id: 4,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  },
  {
    id: 5,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  },
  {
    id: 6,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  },
  {
    id: 7,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  },
  {
    id: 8,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  },
  {
    id: 9,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  },
  {
    id: 10,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  },
  {
    id: 11,
    title: "Transação 2",
    amount: 200,
    date: "2023-10-02",
  }
]

export default function TransactionList() {
  return (
    <ScrollView style={styles.container}>
      {Array.from(transactions).map((transaction) => (
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
