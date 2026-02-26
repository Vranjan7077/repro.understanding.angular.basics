import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CardComponent } from '../../shared/card/card.component';
import { User } from '../../models/user.model';
import { LogEntry } from '../../models/logEntry.model';

@Component({
  selector: 'app-http-interceptor',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './http-interceptor.component.html',
  styleUrl: './http-interceptor.component.scss',
})
export class HttpInterceptorComponent {
  private userService = inject(UserService);

  logs: LogEntry[] = [];
  isLoading = false;

  makeRequest() {
    this.isLoading = true;
    this.addLog('request', 'GET /users/1 — request sent');

    this.userService.getUser(1).subscribe({
      next: (user: User) => {
        this.addLog('response', `Response received — User: ${user.name}`);
        this.isLoading = false;
      },
      error: (err) => {
        this.addLog('error', `Request failed — ${err.message}`);
        this.isLoading = false;
      },
    });
  }

  makeFailingRequest() {
    this.isLoading = true;
    this.addLog('request', 'GET /users/99999 — request sent');

    this.userService.getUser(99999).subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: (err) => {
        this.addLog('error', `Error — ${err.message}`);
        this.isLoading = false;
      },
    });
  }

  clearLogs() {
    this.logs = [];
  }

  private addLog(type: LogEntry['type'], message: string) {
    this.logs.unshift({
      type,
      message,
      timestamp: new Date().toLocaleTimeString(),
    });
  }
}
