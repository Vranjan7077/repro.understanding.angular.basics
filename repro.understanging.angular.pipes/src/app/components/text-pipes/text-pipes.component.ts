import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-text-pipes',
  imports: [CommonModule, CardComponent],
  templateUrl: './text-pipes.component.html',
  styleUrl: './text-pipes.component.scss',
})
export class TextPipesComponent implements OnInit {
  name = '';

  private userService = inject(UserServiceService);

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.name = data[0].name;
    });
  }
}
