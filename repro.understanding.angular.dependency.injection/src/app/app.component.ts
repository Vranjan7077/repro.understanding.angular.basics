import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);
  title = 'repro.understanding.angular.dependency.injection';
  isLazyLoaded = false;

  loadLazy() {
    this.isLazyLoaded = true;
    this.router.navigate([{ outlets: { dynamic: ['lazy'] } }]);
  }

  loadHome() {
    this.isLazyLoaded = false;
    this.router.navigate(['/']);
  }
}
