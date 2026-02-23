import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PipeCounterService {
  pureCount = signal(0);
  impureCount = signal(0);

  incrementPure() {
    this.pureCount.update((c) => c + 1);
  }

  incrementImpure() {
    this.impureCount.update((c) => c + 1);
  }
}
