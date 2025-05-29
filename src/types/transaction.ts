export enum TransactionCategory {
  INCOME = "Income",
  EXPENSE = "Expense"
}

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  date: Date;
  category: TransactionCategory
};