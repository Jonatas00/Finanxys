import TransactionItem from "@/components/TransactionItem/TransactionItem";
import { ScrollView, StyleSheet } from "react-native";

export default function TransactionList() {
  return (
    <ScrollView style={styles.container}>
      {Array.from({ length: 1 }).map((_, i) => (
        <TransactionItem title="2" key={i} />
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
