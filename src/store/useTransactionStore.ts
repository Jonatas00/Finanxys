import { Transaction } from "@/types/transaction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TransactionState = {
  transactions: Transaction[];
  addTransaction: (t: Transaction) => void;
  updateTransaction: (t: Transaction) => void;
  deleteTransaction: (id: string) => void;
  clearTransactions: () => void;
};

function sortByDateDesc(transactions: Transaction[]) {
  return transactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set) => ({
      transactions: [],
      addTransaction: (t) =>
        set((state) => ({
          transactions: sortByDateDesc([...state.transactions, t]),
        })),
      updateTransaction: (updatedTx) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === updatedTx.id ? updatedTx : t
          ),
        })),
      deleteTransaction: (id: string) =>
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
