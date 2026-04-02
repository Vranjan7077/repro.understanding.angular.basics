import { Directive, HostListener } from '@angular/core';

type TrimTarget = HTMLInputElement | HTMLTextAreaElement;

@Directive({
  selector: '[appTrim]',
  standalone: true,
})
export class TrimDirective {
  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent): void {
    const target = event.target as TrimTarget;

    if (!target || typeof target.value !== 'string') return;

    const trimmedValue = target.value.trim();

    if (trimmedValue !== target.value) {
      target.value = trimmedValue;

      target.dispatchEvent(new Event('input', { bubbles: true }));
      target.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
}
