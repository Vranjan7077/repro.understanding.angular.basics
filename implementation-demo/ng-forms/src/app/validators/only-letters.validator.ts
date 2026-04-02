import { AbstractControl, ValidationErrors } from '@angular/forms';

export function onlyLettersValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const value = control.value || '';
  return /^[a-zA-Z\s]+$/.test(value) ? null : { invalidName: true };
}
