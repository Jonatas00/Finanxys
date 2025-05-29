// store/transactionStore.ts
import { Transaction } from "@/types/transaction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TransactionState = {
  transactions: Transaction[];
  addTransaction: (t: Transaction) => void;
  updateTransaction: (t: Transaction) => void;
  deleteTransaction: (id: number) => void;
  clearTransactions: () => void;
};

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set) => ({
      transactions: [],
      addTransaction: (t) =>
        set((state) => ({
          transactions: [...state.transactions, t],
        })),
      updateTransaction: (updatedTx) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === updatedTx.id ? updatedTx : t
          ),
        })),
      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
      clearTransactions: () => set({ transactions: [] })
    }),
    {
      name: "transactions-storage",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
