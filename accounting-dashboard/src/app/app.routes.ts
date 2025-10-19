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
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'payroll',
    loadComponent: () => import('./pages/payroll/payroll').then(m => m.Payroll)
  },
  {
    path: 'receipts',
    loadComponent: () => import('./pages/receipts/receipts').then(m => m.Receipts)
  },
  {
    path: 'analytics',
    loadComponent: () => import('./pages/analytics/analytics').then(m => m.Analytics)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./pages/notifications/notifications').then(m => m.Notifications)
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then(m => m.Admin)
  },
  {
    path: 'help',
    loadComponent: () => import('./pages/help/help').then(m => m.Help)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];