import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-http-put',
  standalone: true,
  imports: [FormsModule, AsyncPipe, CardComponent, CommonModule],
  templateUrl: './http-put.component.html',
  styleUrl: './http-put.component.scss',
})
export class HttpPutComponent {
  private userService = inject(UserService);

  userId: number = 1;
  updatedUser: Partial<User> = { name: '', email: '', phone: '' };
  result$: Observable<User> | null = null;
  errorMsg = '';
  isLoading = false;

  updateUser() {
    this.isLoading = true;
    this.errorMsg = '';
    this.result$ = null;

    if (this.userId < 1 || this.userId > 10) {
      this.errorMsg = 'jsonplaceholder only supports user IDs 1–10';
      this.isLoading = false;
      return;
    }

    this.userService
      .updateUser(this.userId, this.updatedUser as User)
      .subscribe({
        next: (user) => {
          this.result$ = of(user);
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMsg = err.message;
          this.isLoading = false;
        },
      });
  }

  resetForm() {
    this.updatedUser = { name: '', email: '', phone: '' };
    this.result$ = null;
    this.errorMsg = '';
  }
}
