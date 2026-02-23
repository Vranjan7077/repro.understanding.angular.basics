import { Pipe, PipeTransform } from '@angular/core';

type PrimitiveSortable = string | number | boolean | null | undefined;

@Pipe({
  name: 'sortPipe',
  standalone: true,
})
export class SortPipePipe implements PipeTransform {
  transform<T>(
    array: T[] | null | undefined,
    field: keyof T & string,
  ): T[] {
    if (!array || !array.length) return [];

    return array.slice().sort((a, b) => {
      const valA = (a as Record<string, PrimitiveSortable>)[field];
      const valB = (b as Record<string, PrimitiveSortable>)[field];

      if (typeof valA === 'boolean' && typeof valB === 'boolean') {
        return Number(valA) - Number(valB);
      }

      if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.toLowerCase().localeCompare(valB.toLowerCase());
      }

      if (typeof valA === 'number' && typeof valB === 'number') {
        return valA - valB;
      }

      return String(valA ?? '').localeCompare(String(valB ?? ''));
    });
  }
}
