import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes';
import { Tabla } from '../../Componentes/tabla/tabla';
 
@Component({
  selector: 'app-clientes',
  imports: [Tabla],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {
  data: any[] = [];
 
  constructor(private clientesService: ClientesService, private cdr: ChangeDetectorRef) {}
 
  ngOnInit(): void {
    this.clientesService.getClientes().subscribe((rows: any[]) => {
      this.data = rows;
      this.cdr.detectChanges();
    });
  }
}
 