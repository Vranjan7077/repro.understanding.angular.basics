import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-date-pipes',
  imports: [CommonModule, CardComponent],
  templateUrl: './date-pipes.component.html',
  styleUrl: './date-pipes.component.scss',
})
export class DatePipesComponent {
  today = new Date();
}
