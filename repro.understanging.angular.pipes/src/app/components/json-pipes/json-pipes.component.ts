import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-json-pipes',
  imports: [CommonModule, CardComponent],
  templateUrl: './json-pipes.component.html',
  styleUrl: './json-pipes.component.scss',
})
export class JsonPipesComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;
  isLoading = true;

  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.slice(0, 2);
        this.selectedUser = data[0];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
