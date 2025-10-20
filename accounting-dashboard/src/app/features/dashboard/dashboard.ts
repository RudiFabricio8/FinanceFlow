// src/app/features/dashboard/dashboard.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportService } from '../../core/services/export';
import { StatCard } from '../../core/models/stat-card.model';
import { Transaction } from '../../core/models/transaction.model';

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
      title: 'Total Ingresos',
      value: '$250,000',
      change: '+15%',
      isPositive: true
    },
    {
      title: 'Gastos de nómina',
      value: '$75,000',
      change: '-5%',
      isPositive: false
    },
    {
      title: 'Facturas pendientes',
      value: '$12,500',
      change: '+10%',
      isPositive: true
    },
    {
      title: 'Satisfacción',
      value: '92%',
      change: '+2%',
      isPositive: true
    }
  ];

  transactions: Transaction[] = [
    {
      date: 'Jul 26, 2024',
      description: 'Factura #12345 Pago',
      category: 'Ganancia',
      amount: 5000.00,
      isPositive: true
    },
    {
      date: 'Jul 25, 2024',
      description: 'Material de oficina',
      category: 'Gastos',
      amount: 150.25,
      isPositive: false
    },
    {
      date: 'Jul 24, 2024',
      description: 'Pago - Julio',
      category: 'Nóminas de sueldos',
      amount: 15000.00,
      isPositive: false
    },
    {
      date: 'Jul 23, 2024',
      description: 'Suscripción de software',
      category: 'Gastos',
      amount: 99.00,
      isPositive: false
    }
  ];

  constructor(private exportService: ExportService) {}

  ngOnInit(): void {
    // Inicialización del componente
  }

  exportData(): void {
    console.log('Exportando datos...');
    
    const choice = confirm('¿Desea exportar a Excel? (Aceptar = Excel, Cancelar = PDF)');
    
    if (choice) {
      this.exportService.exportTransactionsToExcel(this.transactions);
    } else {
      this.exportService.exportTransactionsToPDF(this.transactions);
    }
  }

  formatAmount(amount: number, isPositive: boolean): string {
    const sign = isPositive ? '+' : '-';
    return `${sign}$${amount.toFixed(2)}`;
  }
}