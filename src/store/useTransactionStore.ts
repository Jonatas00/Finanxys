// store/transactionStore.ts
import { Transaction } from "@/types/transaction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TransactionState = {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
  updateTransaction: (tx: Transaction) => void;
  deleteTransaction: (id: number) => void;
};

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set) => ({
      transactions: [],
      addTransaction: (tx) =>
        set((state) => ({
          transactions: [...state.transactions, tx],
        })),
      updateTransaction: (updatedTx) =>
        set((state) => ({
          transactions: state.transactions.map((tx) =>
            tx.id === updatedTx.id ? updatedTx : tx
          ),
        })),
      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((tx) => tx.id !== id),
        })),
    }),
    {
      name: "transactions-storage",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
