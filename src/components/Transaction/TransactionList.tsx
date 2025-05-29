import { Transaction, TransactionCategory } from "@/types/transaction";
import { ScrollView, StyleSheet, View } from "react-native";
import AddTransactionButton from "../Button/AddTransactionButton";
import TransactionItem from "./TransactionItem";
import TransactionModal from "./TransactionModal";

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
    <View style={styles.transactionsContainer}>
      <ScrollView >
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer} >
        <AddTransactionButton />
      </View>
      <TransactionModal />
    </View>
  )
};

const styles = StyleSheet.create({
  transactionsContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  buttonContainer: {
    paddingVertical: 8,
    alignItems: "flex-end"
  }
})

