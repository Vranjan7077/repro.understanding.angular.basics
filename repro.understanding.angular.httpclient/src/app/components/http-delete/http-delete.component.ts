import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-http-delete',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './http-delete.component.html',
  styleUrl: './http-delete.component.scss',
})
export class HttpDeleteComponent {
  private userService = inject(UserService);

  userId: number = 1;
  successMsg = '';
  errorMsg = '';
  isLoading = false;

  deleteUser() {
    this.isLoading = true;
    this.errorMsg = '';
    this.successMsg = '';

    this.userService.deleteUser(this.userId).subscribe({
      next: () => {
        this.successMsg = `User ${this.userId} deleted successfully!`;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMsg = err.message;
        this.isLoading = false;
      },
    });
  }

  reset() {
    this.successMsg = '';
    this.errorMsg = '';
    this.userId = 1;
  }
}
