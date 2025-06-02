import MainAddButton from "@/components/Button/MainAddButton";
import TransactionModal from "@/components/Modals/TransactionModal";
import TransactionItem from "@/components/Transaction/TransactionItem";
import { ModalType, useModalStore } from "@/store/useModalStore";
import { useTransactionStore } from "@/store/useTransactionStore";
import { colors } from "@/utils/colors";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TransactionList() {
  const transactions = useTransactionStore(state => state.transactions)
  const openModal = useModalStore((state) => state.openModal);

  return (
    <View style={styles.transactionsContainer}>
      <ScrollView >
        {transactions.length === 0 ?
          (
            <View style={styles.emptyContainer}>
              <Text style={styles.empty}>
                Comece adicionando seu primeiro gasto
              </Text>
            </View>
          ) : (
            transactions.map((transaction) => (
              <TransactionItem
                onPress={() => openModal(ModalType.EDIT)}
                key={transaction.id}
                transaction={transaction}
              />
            ))
          )
        }
      </ScrollView>
      <View style={styles.buttonContainer} >
        <MainAddButton />
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
    alignItems: "flex-end",
    margin: 8
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  empty: {
    color: colors.textPrimary
  }
})

