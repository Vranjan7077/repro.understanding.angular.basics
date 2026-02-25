import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-singleton-cpt-a',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './singleton-cpt-a.component.html',
  styleUrl: './singleton-cpt-a.component.scss',
})
export class SingletonCptAComponent {
  private logger = inject(LoggerService);
  loggerId = this.formatId(this.logger.getId());

  private formatId(id: number) {
    return '#' + Math.abs(id).toString().substring(0, 6);
  }
}
