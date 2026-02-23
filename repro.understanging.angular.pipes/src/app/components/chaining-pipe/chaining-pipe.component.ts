import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-chaining-pipe',
  imports: [CommonModule, CardComponent],
  templateUrl: './chaining-pipe.component.html',
  styleUrl: './chaining-pipe.component.scss',
})
export class ChainingPipeComponent {
  name = 'angular chaining pipes demo';
}
