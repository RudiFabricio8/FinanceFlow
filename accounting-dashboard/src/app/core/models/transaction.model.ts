// src/app/core/models/transaction.model.ts
export interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number;
  isPositive: boolean;
}