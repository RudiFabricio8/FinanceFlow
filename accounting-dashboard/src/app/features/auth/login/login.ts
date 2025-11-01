// src/app/features/auth/login/login.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';
  rememberMe = false;
  showError = false;
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router) {
    // Verificar si ya está autenticado
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  validateEmail(): boolean {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(this.email);
  }

  validatePassword(): boolean {
    return this.password.length >= 8;
  }

  async onSubmit(): Promise<void> {
    this.showError = false;
    this.errorMessage = '';

    // Validaciones
    if (!this.validateEmail()) {
      this.showError = true;
      this.errorMessage = 'Por favor, ingresa un email válido';
      return;
    }

    if (!this.validatePassword()) {
      this.showError = true;
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres';
      return;
    }

    // Simular login
    this.isLoading = true;

    // Simular delay de API
    setTimeout(() => {
      // Por ahora, cualquier email/password funciona (desarrollo)
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', this.email);
      
      if (this.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      this.isLoading = false;
      this.router.navigate(['/dashboard']);
    }, 1000);
  }

  private isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  onForgotPassword(): void {
    // Implementar lógica de recuperación de contraseña
    alert('Funcionalidad de recuperación de contraseña próximamente');
  }
}