import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-singleton-cpt-b',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './singleton-cpt-b.component.html',
  styleUrl: './singleton-cpt-b.component.scss',
})
export class SingletonCptBComponent {
  private logger = inject(LoggerService);
  loggerId = this.formatId(this.logger.getId());

  private formatId(id: number) {
    return '#' + Math.abs(id).toString().substring(0, 6);
  }
}
