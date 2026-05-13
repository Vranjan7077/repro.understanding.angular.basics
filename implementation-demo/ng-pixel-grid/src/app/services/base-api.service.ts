import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export abstract class BaseApiService {
  protected readonly http = inject(HttpClient);

  private readonly maxRetries = 3;

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      retry(this.maxRetries),
      catchError((error: HttpErrorResponse) => this.handleError(error)),
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let userMessage: string;

    if (error.status === 0) {
      userMessage = 'Unable to reach the server. Please check your connection.';
    } else {
      userMessage = `Server returned ${error.status}: ${error.statusText}`;
    }

    return throwError(() => new Error(userMessage));
  }
}
