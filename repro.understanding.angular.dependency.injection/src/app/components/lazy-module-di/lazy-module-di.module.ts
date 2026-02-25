import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleDiComponent } from './lazy-module-di.component';

@NgModule({
  imports: [CommonModule, LazyModuleDiComponent],
  exports: [LazyModuleDiComponent],
})
export class LazyModuleDiModule {}
