import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, map, tap } from 'rxjs';
import { CacheUserService } from '../../service/cache-user.service';
import { CacheResponse } from '../../models/cache.response.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-caching',
  standalone: true,
  imports: [AsyncPipe, CardComponent],
  templateUrl: './caching.component.html',
  styleUrl: './caching.component.scss',
})
export class CachingComponent {
  private userService = inject(CacheUserService);

  response$: Observable<CacheResponse> | null = null;
  isLoading = false;

  loadData() {
    this.isLoading = true;
    this.response$ = this.userService.getUsers();

    this.response$.subscribe({
      next: () => (this.isLoading = false),
      error: () => (this.isLoading = false),
    });
  }

  clearAndRefresh() {
    this.isLoading = true;
    this.response$ = this.userService.refreshUsers().pipe(
      map((res) => ({
        ...res,
        data: [...res.data].sort(() => Math.random() - 0.5),
      })),
      tap(() => (this.isLoading = false)),
    );
  }
}
