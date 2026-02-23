import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';
import { PureFilterPipe } from '../../pipes/pure-filter.pipe';
import { ImpureFilterPipe } from '../../pipes/impure-filter.pipe';
import { PipeCounterService } from '../../services/pipe-counter.service';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-pure-vs-impure-pipe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    PureFilterPipe,
    ImpureFilterPipe,
  ],
  templateUrl: './pure-vs-impure-pipe.component.html',
  styleUrl: './pure-vs-impure-pipe.component.scss',
})
export class PureVsImpurePipeComponent implements OnInit {
  users: User[] = [];
  newUser = { name: '', username: '', email: '' };

  counter = inject(PipeCounterService);
  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.slice(0, 2);
    });
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.username || !this.newUser.email)
      return;

    this.users = [...this.users, { ...this.newUser } as User];
    this.newUser = { name: '', username: '', email: '' };
  }
}
