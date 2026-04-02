import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cannotContainSpace(
  control: AbstractControl,
): ValidationErrors | null {
  const value = control.value || '';

  if (value.includes(' ')) {
    return { cannotContainSpace: true };
  }

  return null;
}
