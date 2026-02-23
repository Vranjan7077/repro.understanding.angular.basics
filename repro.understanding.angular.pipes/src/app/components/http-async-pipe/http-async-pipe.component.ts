import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { UserServiceService } from '../../services/user-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-http-async-pipe',
  imports: [CardComponent, CommonModule, LoadingComponent],
  templateUrl: './http-async-pipe.component.html',
  styleUrl: './http-async-pipe.component.scss',
})
export class HttpAsyncPipeComponent {
  private userService = inject(UserServiceService);

  users$: Observable<User[]> = this.userService
    .getUsers()
    .pipe(map((users) => users.slice(0, 2)));
}
