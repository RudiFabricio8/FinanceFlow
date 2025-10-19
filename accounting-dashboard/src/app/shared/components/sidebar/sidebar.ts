// src/app/shared/components/sidebar/sidebar.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  menuItems: MenuItem[] = [
    {
      icon: 'payments',
      label: 'Gestión de nómina',
      route: '/payroll'
    },
    {
      icon: 'receipt_long',
      label: 'Recibos y documentos',
      route: '/receipts'
    },
    {
      icon: 'analytics',
      label: 'Interfaz de reportes y análisis',
      route: '/analytics'
    },
    {
      icon: 'notifications',
      label: 'Notificaciones',
      route: '/notifications'
    },
    {
      icon: 'admin_panel_settings',
      label: 'Administración y configuración',
      route: '/admin',
      active: true
    }
  ];

  footerItems: MenuItem[] = [
    {
      icon: 'help_outline',
      label: 'Ayuda',
      route: '/help'
    },
    {
      icon: 'logout',
      label: 'Cerrar Sesión',
      route: '/logout'
    }
  ];

  onMenuItemClick(item: MenuItem): void {
    console.log('Navegando a:', item.route);
  }
}