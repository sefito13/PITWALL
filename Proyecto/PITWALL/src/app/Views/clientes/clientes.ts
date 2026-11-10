import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes';
import { Tabla } from '../../Componentes/tabla/tabla';

@Component({
  selector: 'app-clientes',
  imports: [Tabla],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: any[] = [];

  constructor(public clientesService: ClientesService) {
    this.clientesService.getClientes().subscribe((data: any[]) => {
      this.clientes = data;
    });
  }

  verCliente(fila: any) {
    console.log(fila);
  }
}
