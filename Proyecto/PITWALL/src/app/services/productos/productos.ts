import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private readonly url =
    'https://backend-production-d4095f45.up.railway.app/api/v1/productos';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  public getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  // Obtener un producto por ID
  getProductoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  // Crear un producto
  crearProducto(producto: any): Observable<any> {
    return this.http.post<any>(this.url, producto);
  }

  // Actualizar completamente un producto
  actualizarProducto(id: number, producto: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, producto);
  }

  // Eliminar un producto
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}