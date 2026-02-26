import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private readonly API = 'https://jsonplaceholder.typicode.com/users/1';

  login() {
    return this.http.get<any>(this.API).pipe(
      tap(() => {
        localStorage.setItem('token', 'fake-jwt-token');
      }),
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
