import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CardComponent } from '../../shared/card/card.component';
import { AsyncPipe } from '@angular/common';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-switch-map',
  standalone: true,
  imports: [CardComponent, AsyncPipe, FormsModule],
  templateUrl: './http-switch-map.component.html',
  styleUrl: './http-switch-map.component.scss',
})
export class HttpSwitchMapComponent {
  private userService = inject(UserService);

  selectedId$ = new Subject<number>();
  user$: Observable<User | null>;
  isLoading = false;
  errorMsg = '';
  selectedId = 1;

  constructor() {
    this.user$ = this.selectedId$.pipe(
      tap(() => {
        this.isLoading = true;
        this.errorMsg = '';
      }),
      switchMap((id) =>
        this.userService.getUser(id).pipe(
          tap(() => (this.isLoading = false)),
          catchError((err) => {
            this.errorMsg = err.message;
            this.isLoading = false;
            return of(null);
          }),
        ),
      ),
    );
  }

  fetchUser() {
    this.selectedId$.next(this.selectedId);
  }
}
