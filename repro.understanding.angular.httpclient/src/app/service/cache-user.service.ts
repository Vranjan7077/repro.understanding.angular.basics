import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map, delay } from 'rxjs';
import { User } from '../models/user.model';
import { CacheResponse } from '../models/cache.response.model';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class CacheUserService {
  private http = inject(HttpClient);
  private cache = inject(CacheService);
  public isFromCache = false;

  private readonly API = 'https://jsonplaceholder.typicode.com/users';
  private readonly CACHE_KEY = 'users_list_top_5';

  getUsers(): Observable<CacheResponse> {
    const cachedData = this.cache.get(this.CACHE_KEY);

    if (cachedData) {
      this.isFromCache = true;
      return of({ data: cachedData, source: 'cache' });
    }

    this.isFromCache = false;
    return this.http.get<User[]>(this.API).pipe(
      delay(1500),
      map((users) => users.slice(0, 5)),
      tap((users) => this.cache.set(this.CACHE_KEY, users)),
      map((users) => ({ data: users, source: 'api' })),
    );
  }

  refreshUsers(): Observable<CacheResponse> {
    this.cache.clear();
    return this.getUsers();
  }
}
