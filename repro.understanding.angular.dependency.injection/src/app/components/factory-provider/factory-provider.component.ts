import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../services/logger.service';
import { CardComponent } from '../../shared/card/card.component';

// Factory function to handle the instantiation
function loggerFactory(apiUrl: string) {
  return new LoggerService(apiUrl);
}

@Component({
  selector: 'app-factory-provider',
  standalone: true,
  imports: [CardComponent, CommonModule],
  providers: [
    { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com' },
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: ['API_URL'],
    },
  ],
  templateUrl: './factory-provider.component.html',
  styleUrls: ['./factory-provider.component.scss'],
})
export class FactoryProviderComponent {
  private logger = inject(LoggerService);
  loggerId = this.formatId(this.logger.getId());
  apiUrl = this.logger.getApiUrl();

  logMessage() {
    this.logger.log('Action performed in Factory Component', 'Auth');
  }

  getLogs() {
    return this.logger.getHistory();
  }

  private formatId(id: number) {
    return '#' + Math.abs(id).toString().substring(0, 6);
  }
}
