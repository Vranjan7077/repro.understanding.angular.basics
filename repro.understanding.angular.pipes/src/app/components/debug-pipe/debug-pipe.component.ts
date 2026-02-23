import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DebugPipePipe } from '../../pipes/debug-pipe.pipe';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/user.model';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-debug-pipe',
  imports: [CommonModule, CardComponent, DebugPipePipe, LoadingComponent],
  templateUrl: './debug-pipe.component.html',
  styleUrl: './debug-pipe.component.scss',
})
export class DebugPipeComponent implements OnInit {
  selectedUser: User | null = null;

  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.selectedUser = data[0];
    });
  }
}
