import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../../shared/card/card.component';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-http-error',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './http-error.component.html',
  styleUrl: './http-error.component.scss',
})
export class HttpErrorComponent {
  private http = inject(HttpClient);

  errorMsg = '';
  successMsg = '';
  isLoading = false;

  triggerNotFound() {
    this.makeRequest('https://jsonplaceholder.typicode.com/users/99999');
  }

  triggerNetworkError() {
    this.makeRequest('https://this-domain-does-not-exist.xyz/api');
  }

  triggerServerError() {
    this.makeRequest('https://httpstat.us/500');
  }

  triggerSuccess() {
    this.makeRequest('https://jsonplaceholder.typicode.com/users/1');
  }

  private makeRequest(url: string) {
    this.isLoading = true;
    this.errorMsg = '';
    this.successMsg = '';

    this.http
      .get(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let msg = '';
          if (error.status === 0) {
            msg = `Network Error — Could not reach the server`;
          } else {
            msg = `HTTP ${error.status} — ${error.statusText || 'Error'}`;
          }
          return throwError(() => new Error(msg));
        }),
      )
      .subscribe({
        next: (data) => {
          this.successMsg = `Success! Response received.`;
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMsg = err.message;
          this.isLoading = false;
        },
      });
  }
}
