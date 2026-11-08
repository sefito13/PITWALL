import { Routes } from '@angular/router';
import { Inicio } from './Views/inicio/inicio';
import { Productos } from './Views/productos/productos';
import { Clientes } from './Views/clientes/clientes';
import { Reservas } from './Views/reservas/reservas';
import { Formulario } from './Views/formulario/formulario';
import { Tablas } from './Views/tablas/tablas';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio},
  { path: 'productos', component: Productos},
  { path: 'clientes', component: Clientes},
  { path: 'reservas', component: Reservas},
  { path: 'formulario', component: Formulario},
  { path: 'tablas', component: Tablas}
];
