import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPipe',
  standalone: true,
})
export class DefaultPipePipe implements PipeTransform {
  transform(value: string, defaultValue: string): string {
    if (!value || value.trim() === '') {
      return defaultValue;
    }

    return value;
  }
}
