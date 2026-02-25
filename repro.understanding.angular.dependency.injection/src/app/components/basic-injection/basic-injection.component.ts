import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-basic-injection',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './basic-injection.component.html',
  styleUrl: './basic-injection.component.scss',
})
export class BasicInjectionComponent {
  private logger = inject(LoggerService);
  loggerId = this.formatId(this.logger.getId());

  private formatId(id: number) {
    return '#' + Math.abs(id).toString().substring(0, 6);
  }
}
