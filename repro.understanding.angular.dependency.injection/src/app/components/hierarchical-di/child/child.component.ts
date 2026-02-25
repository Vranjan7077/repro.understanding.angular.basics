import { Component, inject } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  private logger = inject(LoggerService);

  loggerId = this.formatId(this.logger.getId());

  private formatId(id: number) {
    return '#' + Math.abs(id).toString().substring(0, 6);
  }
}
