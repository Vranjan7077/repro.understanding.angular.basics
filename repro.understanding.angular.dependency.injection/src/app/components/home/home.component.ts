import { Component } from '@angular/core';
import { BasicInjectionComponent } from '../basic-injection/basic-injection.component';
import { InjectFunctionComponent } from '../inject-function/inject-function.component';
import { SingletonCptAComponent } from '../singleton-cpt-a/singleton-cpt-a.component';
import { SingletonCptBComponent } from '../singleton-cpt-b/singleton-cpt-b.component';
import { ComponentProviderComponent } from '../component-provider/component-provider.component';
import { TokenInjectionComponent } from '../token-injection/token-injection.component';
import { FactoryProviderComponent } from '../factory-provider/factory-provider.component';
import { ParentComponent } from '../hierarchical-di/parent/parent.component';
import { OptionalDiComponent } from '../optional-di/optional-di.component';
import { EnvironmentInjectorComponent } from '../environment-injector/environment-injector.component';
import { MultiProviderComponent } from '../multi-provider/multi-provider.component';
import { InterceptorDiComponent } from '../interceptor-di/interceptor-di.component';
import { SingletonVsComponentProviderComponent } from '../singleton-vs-component-provider/singleton-vs-component-provider.component';

const compoonents = [
  BasicInjectionComponent,
  InjectFunctionComponent,
  SingletonCptAComponent,
  SingletonCptBComponent,
  ComponentProviderComponent,
  TokenInjectionComponent,
  FactoryProviderComponent,
  ParentComponent,
  OptionalDiComponent,
  EnvironmentInjectorComponent,
  MultiProviderComponent,
  InterceptorDiComponent,
  SingletonVsComponentProviderComponent,
];

@Component({
  selector: 'app-home',
  imports: [...compoonents],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
