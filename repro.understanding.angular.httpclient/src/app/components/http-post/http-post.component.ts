import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-http-post',
  standalone: true,
  imports: [FormsModule, AsyncPipe, CardComponent, CommonModule],
  templateUrl: './http-post.component.html',
  styleUrl: './http-post.component.scss',
})
export class HttpPostComponent {
  private userService = inject(UserService);

  newUser: Partial<User> = { name: '', email: '', phone: '' };
  createdUser$: Observable<User> | null = null;
  errorMsg = '';
  isLoading = false;

  createUser() {
    this.isLoading = true;
    this.errorMsg = '';
    this.createdUser$ = null;

    this.userService.createUser(this.newUser as User).pipe();

    this.userService.createUser(this.newUser as User).subscribe({
      next: (user) => {
        this.createdUser$ = new Observable((obs) => obs.next(user));
        this.isLoading = false;
        this.resetForm();
      },
      error: (err) => {
        this.errorMsg = err.message;
        this.isLoading = false;
      },
    });
  }

  resetForm() {
    this.newUser = { name: '', email: '', phone: '' };
  }
}
