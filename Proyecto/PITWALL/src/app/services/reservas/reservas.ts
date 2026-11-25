import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class ReservasService {
 
  private readonly url = 'http://localhost:3000/api/v1/reservas';
 
  constructor(private http: HttpClient) {}
 
  // Obtener todas las reservas
  public getReservas(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
 
  // Obtener una reserva por ID
  getReservaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
 
  // Crear una reserva
  crearReserva(reserva: any): Observable<any> {
    return this.http.post<any>(this.url, reserva);
  }
 
  // Actualizar completamente una reserva
  actualizarReserva(id: number, reserva: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, reserva);
  }
 
  // Eliminar una reserva
  eliminarReserva(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}