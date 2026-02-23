import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectFormatPipe',
  standalone: true,
})
export class ObjectFormatPipePipe implements PipeTransform {
  transform(user: any): string {
    return `${user.name} (${user.company?.name ?? `@${user.username}`})`;
  }
}
