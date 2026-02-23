import { Pipe, PipeTransform, inject } from '@angular/core';
import { PipeCounterService } from '../services/pipe-counter.service';

@Pipe({
  name: 'pureFilter',
  pure: true,
  standalone: true,
})
export class PureFilterPipe implements PipeTransform {
  private counter = inject(PipeCounterService);

  transform(users: any[]): any[] {
    setTimeout(() => this.counter.incrementPure());
    return users;
  }
}
