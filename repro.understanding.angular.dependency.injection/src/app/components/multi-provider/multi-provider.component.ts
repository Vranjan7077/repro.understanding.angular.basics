import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { MULTI_LOGGER } from '../../tokens/multi-logger.token';
import { ConsoleLoggerService } from '../../services/console-logger.service';
import { FileLoggerService } from '../../services/file-logger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-provider',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './multi-provider.component.html',
  styleUrls: ['./multi-provider.component.scss'],
  providers: [
    {
      provide: MULTI_LOGGER,
      useClass: ConsoleLoggerService,
      multi: true,
    },
    {
      provide: MULTI_LOGGER,
      useClass: FileLoggerService,
      multi: true,
    },
  ],
})
export class MultiProviderComponent {
  private loggers = inject(MULTI_LOGGER);

  messages: string[] = [];

  logAll() {
    this.messages = this.loggers.map((logger) =>
      logger.log('Multi Provider Works!'),
    );
  }
}
