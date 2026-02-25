import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OptionalService {
  getMessage() {
    return 'Optional Service Available';
  }
}
