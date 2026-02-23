import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-number-pipes',
  imports: [CommonModule, CardComponent],
  templateUrl: './number-pipes.component.html',
  styleUrl: './number-pipes.component.scss',
})
export class NumberPipesComponent {
  price = 2599.5;
  percentage = 0.85;
}
