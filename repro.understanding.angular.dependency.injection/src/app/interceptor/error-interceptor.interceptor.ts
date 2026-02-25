import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError, retry } from 'rxjs';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    retry(1),
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.status === 401) {
        console.error('Unauthorized! Redirecting...');
        router.navigate(['/login']);
      } else if (error.status === 403) {
        errorMessage = 'You do not have permission to access this resource.';
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }

      console.error(errorMessage);
      return throwError(() => new Error(errorMessage));
    }),
  );
};
