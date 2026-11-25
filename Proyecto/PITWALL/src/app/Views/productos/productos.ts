import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos/productos';
import { Tabla } from '../../Componentes/tabla/tabla';

@Component({
  selector: 'app-productos',
  imports: [Tabla],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  productos: any[] = [];

  constructor(public productosService: ProductosService) {
    this.productosService.getProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }

  verProducto(fila: any) {
    console.log(fila);
  }
}