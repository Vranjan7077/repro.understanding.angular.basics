import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debugPipe',
  standalone: true,
})
export class DebugPipePipe implements PipeTransform {
  transform(value: any): any {
    console.log('Debug Pipe:', value);

    return value;
  }
}
