import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  Photo,
  UnsplashApiError,
  UnsplashSearchResponse,
} from '../interface/photos';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private readonly apiKey = environment.unsplashAccessKey;
  private readonly baseUrl = 'https://api.unsplash.com';
  private readonly perPage = 10;

  constructor(private http: HttpClient) {}

  getPhotos(page = 1): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`${this.baseUrl}/photos`, {
        params: this.createParams(page),
      })
      .pipe(catchError(this.errorHandler));
  }

  searchPhotos(query: string, page = 1): Observable<Photo[]> {
    const searchTerm = query.trim();

    if (!searchTerm) {
      return throwError(
        () =>
          ({
            message: 'Please enter a search term.',
          }) satisfies UnsplashApiError,
      );
    }

    return this.http
      .get<UnsplashSearchResponse>(`${this.baseUrl}/search/photos`, {
        params: this.createParams(page).set('query', searchTerm),
      })
      .pipe(
        map((response) => response.results),
        catchError(this.errorHandler),
      );
  }

  getPhotoById(id: string): Observable<Photo> {
    return this.http
      .get<Photo>(`${this.baseUrl}/photos/${id}`, {
        params: new HttpParams().set('client_id', this.apiKey),
      })
      .pipe(catchError(this.errorHandler));
  }

  private createParams(page: number): HttpParams {
    return new HttpParams()
      .set('client_id', this.apiKey)
      .set('page', this.normalizePage(page))
      .set('per_page', this.perPage);
  }

  private normalizePage(page: number): number {
    return Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
  }

  private errorHandler(error: HttpErrorResponse): Observable<never> {
    const apiError: UnsplashApiError = {
      message: 'Something went wrong. Please try again later.',
      status: error.status || undefined,
      details: Array.isArray(error.error?.errors)
        ? error.error.errors
        : undefined,
    };

    if (error.error instanceof ErrorEvent) {
      apiError.message =
        'Network error. Please check your internet connection.';
    } else if (error.status === 0) {
      apiError.message =
        'Unable to reach Unsplash. Please check your connection.';
    } else if (error.status === 401) {
      apiError.message = 'Invalid Unsplash access key.';
    } else if (error.status === 403) {
      apiError.message = 'Unsplash request limit reached or access was denied.';
    } else if (error.status === 404) {
      apiError.message = 'The requested Unsplash resource was not found.';
    } else if (error.status >= 500) {
      apiError.message =
        'Unsplash is temporarily unavailable. Please try again soon.';
    }

    console.error('Unsplash API error:', apiError, error);

    return throwError(() => apiError);
  }
}
