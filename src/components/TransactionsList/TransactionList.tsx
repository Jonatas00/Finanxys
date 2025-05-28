import TransactionItem from "@/components/TransactionItem/TransactionItem";
import TransactionModal from "@/components/TransactionModal/TransactionModal";
import { Transaction, TransactionCategory } from "@/types/transaction";
import { ScrollView, StyleSheet } from "react-native";

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Transação teste 1",
    amount: 100,
    date: new Date(),
    category: TransactionCategory.INCOME
  },
  {
    id: 2,
    title: "Transação teste 2",
    amount: 200,
    date: new Date(),
    category: TransactionCategory.EXPENSE
  },
  {
    id: 3,
    title: "Salário teste 3",
    amount: 0,
    date: new Date(),
    category: TransactionCategory.INCOME
  }
]

export default function TransactionList() {
  return (
    <>
      <ScrollView style={styles.container}>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ScrollView>

      <TransactionModal />
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  }
})
