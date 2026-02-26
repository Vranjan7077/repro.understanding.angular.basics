import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CardComponent } from '../../shared/card/card.component';
import { AsyncPipe } from '@angular/common';
import { forkJoin, Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-http-fork-join',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
  templateUrl: './http-fork-join.component.html',
  styleUrl: './http-fork-join.component.scss',
})
export class HttpForkJoinComponent {
  private userService = inject(UserService);

  results$: Observable<User[]> | null = null;
  isLoading = false;
  errorMsg = '';
  duration = 0;

  loadParallel() {
    this.isLoading = true;
    this.errorMsg = '';
    this.results$ = null;
    const start = Date.now();

    forkJoin([
      this.userService.getUser(1),
      this.userService.getUser(2),
      this.userService.getUser(3),
    ]).subscribe({
      next: (users) => {
        this.duration = Date.now() - start;
        this.results$ = of(users);
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMsg = err.message;
        this.isLoading = false;
      },
    });
  }
}
