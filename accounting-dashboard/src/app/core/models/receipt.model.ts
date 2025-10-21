// src/app/core/models/receipt.model.ts
export interface Receipt {
  id: string;
  title: string;
  date: string;
  amount: number;
  provider: string;
  type: 'receipt' | 'invoice' | 'bill';
  pdfUrl?: string;
}