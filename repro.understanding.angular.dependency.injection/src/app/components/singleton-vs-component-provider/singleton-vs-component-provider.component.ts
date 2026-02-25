import { Component, inject } from '@angular/core';
import { SingletonCptAComponent } from '../singleton-cpt-a/singleton-cpt-a.component';
import { SingletonCptBComponent } from '../singleton-cpt-b/singleton-cpt-b.component';
import { ComponentProviderComponent } from '../component-provider/component-provider.component';

@Component({
  selector: 'app-singleton-vs-component-provider',
  standalone: true,
  imports: [
    SingletonCptAComponent,
    SingletonCptBComponent,
    ComponentProviderComponent,
  ],
  templateUrl: './singleton-vs-component-provider.component.html',
  styleUrl: './singleton-vs-component-provider.component.scss',
})
export class SingletonVsComponentProviderComponent {}
