import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-get',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './http-get.component.html',
  styleUrl: './http-get.component.scss',
})
export class HttpGetComponent {
  private userService = inject(UserService);

  users: User[] = [];
  errorMsg = '';

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => (this.users = users),
      error: (err) => (this.errorMsg = err.message),
    });
  }
}
