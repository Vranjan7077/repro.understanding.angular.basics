import { NgModule } from '@angular/core';
import { BasicInjectionComponent } from './basic-injection/basic-injection.component';
import { SingletonCptAComponent } from './singleton-cpt-a/singleton-cpt-a.component';
import { SingletonCptBComponent } from './singleton-cpt-b/singleton-cpt-b.component';
import { InjectFunctionComponent } from './inject-function/inject-function.component';
import { TokenInjectionComponent } from './token-injection/token-injection.component';
import { FactoryProviderComponent } from './factory-provider/factory-provider.component';
import { OptionalDiComponent } from './optional-di/optional-di.component';
import { HierarchicalDiModule } from './hierarchical-di/hierarchical-di.module';
import { EnvironmentInjectorComponent } from './environment-injector/environment-injector.component';
import { SingletonVsComponentProviderComponent } from './singleton-vs-component-provider/singleton-vs-component-provider.component';

const standaloneComponents = [
  BasicInjectionComponent,
  SingletonCptAComponent,
  SingletonCptBComponent,
  InjectFunctionComponent,
  TokenInjectionComponent,
  FactoryProviderComponent,
  OptionalDiComponent,
  EnvironmentInjectorComponent,
  SingletonVsComponentProviderComponent,
];

@NgModule({
  imports: [...standaloneComponents, HierarchicalDiModule],
  exports: [...standaloneComponents, HierarchicalDiModule],
})
export class ComponentsModule {}
