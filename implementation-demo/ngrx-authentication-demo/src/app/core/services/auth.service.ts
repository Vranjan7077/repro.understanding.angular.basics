import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, switchMap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.get<User[]>(`${this.url}?email=${user.email}`).pipe(
      switchMap((users) =>
        users.length
          ? throwError(() => ({ message: 'EMAIL_EXISTS' }))
          : this.http.post<User>(this.url, user),
      ),
      catchError((err) =>
        err.message ? throwError(() => err) : this.errorHandler(err),
      ),
    );
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.url}?email=${email}`).pipe(
      map((users) => {
        if (!users.length) throw { message: 'EMAIL_NOT_FOUND' };
        if (users[0].password !== password)
          throw { message: 'INVALID_PASSWORD' };
        return users[0];
      }),
      catchError((err) =>
        err.message ? throwError(() => err) : this.errorHandler(err),
      ),
    );
  }

  forgotPassword(email: string): Observable<User> {
    return this.http.get<User[]>(`${this.url}?email=${email}`).pipe(
      map((users) => {
        if (!users.length) throw { message: 'EMAIL_NOT_FOUND' };
        return users[0];
      }),
      catchError((err) =>
        err.message ? throwError(() => err) : this.errorHandler(err),
      ),
    );
  }

  updateProfile(id: number, data: Partial<User>): Observable<User> {
    return this.http
      .patch<User>(`${this.url}/${id}`, data)
      .pipe(catchError((err) => this.errorHandler(err)));
  }

  getErrorMessage(code: string): string {
    switch (code) {
      case 'EMAIL_NOT_FOUND':
        return 'No account found with this email';
      case 'INVALID_PASSWORD':
        return 'Invalid password, please try again';
      case 'USER_DISABLED':
        return 'This account has been disabled';
      case 'EMAIL_EXISTS':
        return 'Email already exists, try logging in';
      case 'OPERATION_NOT_ALLOWED':
        return 'Password sign-in is disabled for this account';
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        return 'Too many attempts, please try again later';
      case 'HTTP_ERROR':
        return 'Something went wrong, please try again later';
      case 'UNKNOWN_ERROR':
      default:
        return 'Something went wrong, please try again';
    }
  }

  errorHandler(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Client error:', error.error.message);
    } else {
      console.error(`Backend error ${error.status}:`, error.error);
    }
    return throwError(() => ({ message: 'HTTP_ERROR' }));
  }
}
