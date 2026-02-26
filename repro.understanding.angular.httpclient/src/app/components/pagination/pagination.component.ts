import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  private http = inject(HttpClient);

  currentPage = signal(1);
  pageSize = 3;

  users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');

  getPaginatedUsers(users: any[]) {
    const start = (this.currentPage() - 1) * this.pageSize;
    const end = start + this.pageSize;
    return users.slice(start, end);
  }

  next() {
    if (this.currentPage() < 4) {
      this.currentPage.update((p) => p + 1);
    }
  }

  prev() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }
}
