import { Routes } from '@angular/router';
import { Inicio } from './Views/inicio/inicio';
import { Productos } from './Views/productos/productos';
import { Clientes } from './Views/clientes/clientes';
import { Reservas } from './Views/reservas/reservas';


export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio},
  { path: 'productos', component: Productos},
  { path: 'clientes', component: Clientes},
  { path: 'reservas', component: Reservas}
];
