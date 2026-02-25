import { Component, EnvironmentInjector, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-environment-injector',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './environment-injector.component.html',
  styleUrl: './environment-injector.component.scss',
})
export class EnvironmentInjectorComponent {
  private envInjector = inject(EnvironmentInjector);

  loggerId: string | null = null;

  createService() {
    const logger = this.envInjector.get(LoggerService);
    this.loggerId = this.formatId(logger.getId());
  }

  private formatId(id: number) {
    return '#' + Math.abs(id).toString().substring(0, 6);
  }
}
