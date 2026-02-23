import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DefaultPipePipe } from '../../pipes/default-pipe.pipe';

@Component({
  selector: 'app-default-pipe',
  imports: [CommonModule, CardComponent, DefaultPipePipe],
  templateUrl: './default-pipe.component.html',
  styleUrl: './default-pipe.component.scss',
})
export class DefaultPipeComponent {
  username = '';
}
