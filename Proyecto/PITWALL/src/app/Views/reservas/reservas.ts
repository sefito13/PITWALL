import { Component } from '@angular/core';
import { ReservasService } from '../../services/reservas/reservas';
import { Tabla } from '../../Componentes/tabla/tabla';

@Component({
  selector: 'app-reservas',
  imports: [Tabla],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css',
})
export class Reservas {

  reservas: any[] = [];

  constructor(public reservasService: ReservasService) {
    this.reservasService.getReservas().subscribe((data: any[]) => {
      this.reservas = data;
    });
  }

  verReserva(fila: any) {
    console.log(fila);
  }
}