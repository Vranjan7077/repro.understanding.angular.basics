import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CardComponent } from '../../shared/card/card.component';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-async-pipes',
  imports: [CommonModule, CardComponent],
  templateUrl: './async-pipes.component.html',
  styleUrl: './async-pipes.component.scss',
})
export class AsyncPipesComponent {
  private userService = inject(UserServiceService);

  message$: Observable<string> = this.userService
    .getUsers()
    .pipe(map((users) => `Hello, ${users[0].name} Data received from API.`));
}
