import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'lazy',
    outlet: 'dynamic',
    loadComponent: () =>
      import('./components/lazy-module-di/lazy-module-di.component').then(
        (m) => m.LazyModuleDiComponent,
      ),
  },
];
