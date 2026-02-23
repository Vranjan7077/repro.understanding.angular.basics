import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-state" *ngIf="show">
      <div class="spinner"></div>
      <span>{{ message }}</span>
    </div>
  `,
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  @Input() show = true;
  @Input() message = 'Loading...';
}
