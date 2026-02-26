import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

const components = [CardComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class SharedModule {}
