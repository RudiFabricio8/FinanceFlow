// src/app/features/auth/register/register.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  companyName = '';
  email = '';
  password = '';
  confirmPassword = '';
  showError = false;
  errors: { [key: string]: string } = {};

  constructor(private router: Router) {}

  validateField(field: string): boolean {
    switch(field) {
      case 'companyName':
        if (!this.companyName.trim()) {
          this.errors[field] = 'Nombre requerido';
          return false;
        }
        break;
      
      case 'email':
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!emailRegex.test(this.email)) {
          this.errors[field] = 'Email inválido';
          return false;
        }
        break;
      
      case 'password':
        if (this.password.length < 8) {
          this.errors[field] = 'Mínimo 8 caracteres';
          return false;
        }
        break;
      
      case 'confirmPassword':
        if (this.confirmPassword !== this.password) {
          this.errors[field] = 'Contraseñas no coinciden';
          return false;
        }
        break;
    }
    
    delete this.errors[field];
    return true;
  }

  onSubmit(): void {
    this.showError = false;
    const fields = ['companyName', 'email', 'password', 'confirmPassword'];
    let isValid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Simular registro exitoso
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', this.email);
      localStorage.setItem('companyName', this.companyName);
      
      // Redirigir al dashboard
      this.router.navigate(['/dashboard']);
    } else {
      this.showError = true;
    }
  }
}