import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos/productos'

@Component({
  imports: [],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {

  constructor(public productosService: ProductosService) {
    this.productosService.getProductos().subscribe((data: any[]) => {
      console.log(data);
    });

  }
}
