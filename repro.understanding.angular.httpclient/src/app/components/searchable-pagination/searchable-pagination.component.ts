import { Component, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-searchable-pagination',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './searchable-pagination.component.html',
  styleUrl: './searchable-pagination.component.scss',
})
export class SearchablePaginationComponent {
  private http = inject(HttpClient);

  readonly pageSize = 3;

  private allUsers = toSignal(
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'),
    { initialValue: [] },
  );

  searchQuery = signal('');
  currentPage = signal(1);

  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.allUsers().filter(
      (u) =>
        u.name.toLowerCase().includes(query) ||
        u.email.toLowerCase().includes(query),
    );
  });

  totalPages = computed(
    () => Math.ceil(this.filteredUsers().length / this.pageSize) || 1,
  );

  paginatedUsers = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredUsers().slice(start, start + this.pageSize);
  });

  updateQuery(val: string) {
    this.searchQuery.set(val);
    this.currentPage.set(1);
  }

  changePage(delta: number) {
    this.currentPage.update((p) => p + delta);
  }
}
