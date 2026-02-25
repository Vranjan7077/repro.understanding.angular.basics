import { Component, inject } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';
import { CardComponent } from '../../../shared/card/card.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CardComponent, ChildComponent],
  providers: [LoggerService],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  private logger = inject(LoggerService);

  loggerId = this.formatId(this.logger.getId());

  private formatId(id: number) {
    return '#' + Math.abs(id).toString().substring(0, 6);
  }
}
