import { Component, Optional, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { OptionalService } from '../../services/optional.service';

@Component({
  selector: 'app-optional-di',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './optional-di.component.html',
  styleUrl: './optional-di.component.scss',
})
export class OptionalDiComponent {
  service = inject(OptionalService, { optional: true });

  message = this.service ? this.service.getMessage() : 'Service NOT provided';
}
