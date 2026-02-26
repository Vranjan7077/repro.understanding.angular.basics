import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-jwt-auth',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './jwt-auth.component.html',
  styleUrl: './jwt-auth.component.scss',
})
export class JwtAuthComponent {
  private authService = inject(AuthService);

  token = '';

  login() {
    this.authService.login().subscribe(() => {
      this.token = this.authService.getToken() ?? '';
    });
  }
}
