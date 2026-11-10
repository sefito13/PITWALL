import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class LoginService {

    private readonly url = 'http://localhost:3000/api/v1/login';

    constructor(private http: HttpClient) {}

    login(usuario: string, contrasena: string): Observable<any> {
    const body = { usuario, contrasena };
    return this.http.post(this.url, body);
    
    }
}
