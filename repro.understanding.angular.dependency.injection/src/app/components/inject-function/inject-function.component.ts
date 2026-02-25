import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-inject-function',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './inject-function.component.html',
  styleUrl: './inject-function.component.scss',
})
export class InjectFunctionComponent {
  private logger = inject(LoggerService);

  message = '';

  logMessage() {
    this.logger.log('inject() function used');
    this.message = 'Message logged. Check console.';
  }
}
