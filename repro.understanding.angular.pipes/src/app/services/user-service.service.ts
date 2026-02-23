import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`).pipe(
      catchError((error) => {
        console.error('Failed to fetch users:', error);
        return of([]);
      }),
    );
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`).pipe(
      catchError((error) => {
        console.error('Failed to fetch posts:', error);
        return of([]);
      }),
    );
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/todos`).pipe(
      catchError((error) => {
        console.error('Failed to fetch todos:', error);
        return of([]);
      }),
    );
  }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/photos`).pipe(
      catchError((error) => {
        console.error('Failed to fetch photos:', error);
        return of([]);
      }),
    );
  }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/comments`).pipe(
      catchError((error) => {
        console.error('Failed to fetch comments:', error);
        return of([]);
      }),
    );
  }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/albums`).pipe(
      catchError((error) => {
        console.error('Failed to fetch albums:', error);
        return of([]);
      }),
    );
  }
}
