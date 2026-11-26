import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private readonly url =
    'https://backend-production-d4095f45.up.railway.app/api/v1/clientes';

  constructor(private http: HttpClient) {}

  public getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getClienteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.url, cliente);
  }

  actualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, cliente);
  }

  actualizarParcialCliente(id: number, cliente: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}`, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}