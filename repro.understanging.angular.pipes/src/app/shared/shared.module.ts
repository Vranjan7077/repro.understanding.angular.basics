import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { UserItemComponent } from './user-item/user-item.component';

const components = [CardComponent, LoadingComponent, UserItemComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class SharedModule {}
