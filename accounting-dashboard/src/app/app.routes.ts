// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta raíz redirige al login si no está autenticado
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  // Rutas de autenticación
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register').then(m => m.Register)
  },
  
  // Rutas protegidas (Dashboard y módulos)
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
    // TODO: Agregar guard de autenticación
    // canActivate: [AuthGuard]
  },
  {
    path: 'payroll',
    loadComponent: () => import('./features/payroll/payroll').then(m => m.Payroll)
    // canActivate: [AuthGuard]
  },
  {
    path: 'receipts',
    loadComponent: () => import('./features/receipts/receipts').then(m => m.Receipts)
    // canActivate: [AuthGuard]
  },
  {
    path: 'analytics',
    loadComponent: () => import('./features/analytics/analytics').then(m => m.Analytics)
    // canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    loadComponent: () => import('./features/notifications/notifications').then(m => m.Notifications)
    // canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin').then(m => m.Admin)
    // canActivate: [AuthGuard]
  },
  {
    path: 'help',
    loadComponent: () => import('./features/help/help').then(m => m.Help)
    // canActivate: [AuthGuard]
  },
  
  // Ruta de logout (opcional)
  {
    path: 'logout',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  
  // Wildcard - redirige a login
  {
    path: '**',
    redirectTo: '/login'
  }
];