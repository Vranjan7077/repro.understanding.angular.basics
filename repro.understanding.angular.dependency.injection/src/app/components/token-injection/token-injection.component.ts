import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { API_URL } from '../../tokens/api.token';

@Component({
  selector: 'app-token-injection',
  imports: [CardComponent],
  standalone: true,
  providers: [
    {
      provide: API_URL,
      useValue: 'https://jsonplaceholder.typicode.com',
    },
  ],
  templateUrl: './token-injection.component.html',
  styleUrl: './token-injection.component.scss',
})
export class TokenInjectionComponent {
  apiUrl = inject(API_URL);
}
