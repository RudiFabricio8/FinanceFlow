import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="logout()">Cerrar sesión</button>`
})
export class LogoutButtonComponent {
  constructor(private auth: AuthService) {}
  logout() { this.auth.logout(); }
}
