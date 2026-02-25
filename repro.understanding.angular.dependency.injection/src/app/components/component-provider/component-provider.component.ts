import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-component-provider',
  standalone: true,
  imports: [CardComponent],
  providers: [LoggerService],
  templateUrl: './component-provider.component.html',
  styleUrl: './component-provider.component.scss',
})
export class ComponentProviderComponent {
  private logger = inject(LoggerService);

  loggerId = this.formatId(this.logger.getId());

  private formatId(id: number) {
    return '#' + Math.abs(id).toString().substring(0, 6);
  }
}
