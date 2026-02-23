import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
})
export class FormatPricePipe implements PipeTransform {
  transform(value: number, currency: string, discount: number): number {
    return value - (value * discount) / 100;
  }
}
