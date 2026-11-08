import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  saldo: number;
}

const CLIENTES_DATA: Cliente[] = [
  {id: 1, nombre: 'Carlos Ramírez', email: 'carlos.ramirez@correo.com', telefono: '3001234567', ciudad: 'Bogotá', saldo: 1250000.50},
  {id: 2, nombre: 'María Fernández', email: 'maria.fernandez@correo.com', telefono: '3109876543', ciudad: 'Medellín', saldo: 830000},
  {id: 3, nombre: 'Andrés Gómez', email: 'andres.gomez@correo.com', telefono: '3152345678', ciudad: 'Cali', saldo: 2100000.75},
  {id: 4, nombre: 'Laura Martínez', email: 'laura.martinez@correo.com', telefono: '3208765432', ciudad: 'Barranquilla', saldo: 450000},
  {id: 5, nombre: 'Juan Pérez', email: 'juan.perez@correo.com', telefono: '3013456789', ciudad: 'Cartagena', saldo: 1780000.25},
  {id: 6, nombre: 'Sofía Rodríguez', email: 'sofia.rodriguez@correo.com', telefono: '3126543210', ciudad: 'Bucaramanga', saldo: 960000},
  {id: 7, nombre: 'Diego Torres', email: 'diego.torres@correo.com', telefono: '3167890123', ciudad: 'Pereira', saldo: 3200000},
  {id: 8, nombre: 'Valentina López', email: 'valentina.lopez@correo.com', telefono: '3187654321', ciudad: 'Manizales', saldo: 620000.90},
  {id: 9, nombre: 'Santiago Herrera', email: 'santiago.herrera@correo.com', telefono: '3045678901', ciudad: 'Cúcuta', saldo: 1490000},
  {id: 10, nombre: 'Camila Castro', email: 'camila.castro@correo.com', telefono: '3226789012', ciudad: 'Santa Marta', saldo: 275000.30},
];

@Component({
  imports: [MatTableModule],
  selector: 'app-table',
  styleUrl: './table.css',
  templateUrl: './table.html',
})
export class Table {
 displayedColumns: string[] = ['id', 'nombre', 'email', 'telefono', 'ciudad', 'saldo'];
dataSource = CLIENTES_DATA;
}

