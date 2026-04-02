import { AbstractControl, ValidationErrors } from '@angular/forms';

export function matchPasswordValidator(
  passwordKey: string,
  confirmKey: string,
) {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordKey)?.value;
    const confirm = group.get(confirmKey)?.value;

    if (!password || !confirm) return null;

    return password === confirm ? null : { passwordMismatch: true };
  };
}
