import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  getErrorMessage(control: AbstractControl | null, fieldName: string): string {
    if (!control || !control.errors || !control.touched) return '';

    const errors = control.errors;

    if (errors['required']) return `${fieldName} is required`;
    if (errors['email']) return `Invalid email format`;
    if (errors['minlength'])
      return `Minimum ${errors['minlength'].requiredLength} characters required`;
    if (errors['maxlength'])
      return `Maximum ${errors['maxlength'].requiredLength} characters allowed`;
    if (errors['weakPassword'])
      return `Password must include uppercase, lowercase, number & special character`;
    if (errors['passwordMismatch']) return `Passwords do not match`;
    if (errors['whitespace']) return `${fieldName} cannot be empty`;
    if (errors['invalidName']) return `Only alphabets allowed`;

    return 'Invalid field';
  }
}
