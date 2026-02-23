import { Pipe, PipeTransform, inject } from '@angular/core';
import { PipeCounterService } from '../services/pipe-counter.service';

@Pipe({
  name: 'impureFilter',
  pure: false,
  standalone: true,
})
export class ImpureFilterPipe implements PipeTransform {
  private counter = inject(PipeCounterService);

  transform(users: any[]): any[] {
    setTimeout(() => this.counter.incrementImpure());
    return users;
  }
}
