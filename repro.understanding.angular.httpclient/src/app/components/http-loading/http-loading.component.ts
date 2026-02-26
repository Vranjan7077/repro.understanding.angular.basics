import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user.model';
import { CardComponent } from '../../shared/card/card.component';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-http-loading',
  standalone: true,
  imports: [CardComponent, AsyncPipe, SlicePipe],
  templateUrl: './http-loading.component.html',
  styleUrl: './http-loading.component.scss',
})
export class HttpLoadingComponent {
  private userService = inject(UserService);

  users$: Observable<User[]> | null = null;
  isLoading = false;

  loadUsers() {
    this.isLoading = true;
    this.users$ = null;

    this.userService
      .getUsers()
      .pipe(delay(1500))
      .subscribe({
        next: (users) => {
          this.users$ = of(users);
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }
}
