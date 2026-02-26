import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss',
})
export class AsyncPipeComponent {
  private userService = inject(UserService);

  users$ = this.userService.getUsers();
}
