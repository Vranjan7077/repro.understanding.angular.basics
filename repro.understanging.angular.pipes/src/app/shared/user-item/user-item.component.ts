import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li class="user-item">
      <div class="avatar" [style.background]="avatarColor">
        {{ user.name.charAt(0) }}
      </div>
      <div class="user-details">
        <span class="user-name">{{ user.name }}</span>
        <span class="user-meta">{{ user.email }}</span>
      </div>
      <ng-content></ng-content>
    </li>
  `,
  styleUrl: './user-item.component.scss',
})
export class UserItemComponent {
  @Input({ required: true }) user!: { name: string; email: string };
  @Input() avatarColor = '#1976d2';
}
