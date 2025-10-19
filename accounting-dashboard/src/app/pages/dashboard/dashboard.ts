// src/app/pages/dashboard/dashboard.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number;
  isPositive: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
  imports: [CommonModule]
})
export class Dashboard implements OnInit {
  statCards: StatCard[] = [
    {
      title: 'Total Revenue',
      value: '$250,000',
      change: '+15%',
      isPositive: true
    },
    {
      title: 'Payroll Expenses',
      value: '$75,000',
      change: '-5%',
      isPositive: false
    },
    {
      title: 'Outstanding Invoices',
      value: '$12,500',
      change: '+10%',
      isPositive: true
    },
    {
      title: 'Employee Satisfaction',
      value: '92%',
      change: '+2%',
      isPositive: true
    }
  ];

  transactions: Transaction[] = [
    {
      date: 'Jul 26, 2024',
      description: 'Invoice #12345 Payment',
      category: 'Revenue',
      amount: 5000.00,
      isPositive: true
    },
    {
      date: 'Jul 25, 2024',
      description: 'Office Supplies',
      category: 'Expenses',
      amount: 150.25,
      isPositive: false
    },
    {
      date: 'Jul 24, 2024',
      description: 'Payroll - July',
      category: 'Payroll',
      amount: 15000.00,
      isPositive: false
    },
    {
      date: 'Jul 23, 2024',
      description: 'Software Subscription',
      category: 'Expenses',
      amount: 99.00,
      isPositive: false
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Inicialización del componente
  }

  exportData(): void {
    console.log('Exportando datos...');
    // Lógica para exportar datos
  }

  formatAmount(amount: number, isPositive: boolean): string {
    const sign = isPositive ? '+' : '-';
    return `${sign}$${amount.toFixed(2)}`;
  }
}