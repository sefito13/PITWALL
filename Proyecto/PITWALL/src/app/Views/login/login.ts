import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login/login';

@Component({
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuario = '';
  contrasena = '';

  constructor(private loginService: LoginService) {}

  ingresar() {
    this.loginService.login(this.usuario, this.contrasena).subscribe({
      next: (respuesta) => {
        Swal.fire({
          title: '¡Bienvenido!',
          text: respuesta.message,
          icon: 'success',
          draggable: true,
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrectos'
        });
      },
    });
  }
}