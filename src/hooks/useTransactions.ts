import { Transaction } from "@/types/transaction";
import { useState } from "react";

export function useTransaction() {
  const [transactions, setTransactions] = useState<Transaction[]>()

  const addTransaction = () => {
  }

  const clearTransaction = () => {
  }

  return {
    transactions
  }
}