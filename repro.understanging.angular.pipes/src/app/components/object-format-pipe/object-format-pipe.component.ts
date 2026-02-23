import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { ObjectFormatPipePipe } from '../../pipes/object-format-pipe.pipe';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-object-format-pipe',
  imports: [CommonModule, CardComponent, ObjectFormatPipePipe],
  templateUrl: './object-format-pipe.component.html',
  styleUrl: './object-format-pipe.component.scss',
})
export class ObjectFormatPipeComponent implements OnInit {
  selectedUser: User | null = null;

  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.selectedUser = data[0];
    });
  }
}
