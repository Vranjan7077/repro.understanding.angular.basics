import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
  standalone: true,
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number, factor: number): number {
    if (value == null || factor == null) {
      return 0;
    }

    return value * factor;
  }
}
