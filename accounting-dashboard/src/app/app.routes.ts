// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'payroll',
    loadComponent: () => import('./features/payroll/payroll').then(m => m.Payroll)
  },
  {
    path: 'receipts',
    loadComponent: () => import('./features/receipts/receipts').then(m => m.Receipts)
  },
  {
    path: 'analytics',
    loadComponent: () => import('./features/analytics/analytics').then(m => m.Analytics)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./features/notifications/notifications').then(m => m.Notifications)
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin').then(m => m.Admin)
  },
  {
    path: 'help',
    loadComponent: () => import('./features/help/help').then(m => m.Help)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];