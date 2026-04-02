import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService, User } from '../../service/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  user: User | null = null;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    this.user = this.auth.currentUser;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
