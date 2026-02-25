import { Component, inject } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-lazy-module-di',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './lazy-module-di.component.html',
  styleUrl: './lazy-module-di.component.scss',
})
export class LazyModuleDiComponent {
  loggerId = inject(LoggerService).getId();
}
