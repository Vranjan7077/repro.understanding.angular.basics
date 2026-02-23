import { Component } from '@angular/core';
import { MultiplyPipe } from '../../pipes/multiply.pipe';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-multiply-pipes',
  imports: [MultiplyPipe, CardComponent],
  templateUrl: './multiply-pipes.component.html',
  styleUrl: './multiply-pipes.component.scss',
})
export class MultiplyPipesComponent {
  number = 200;
}
