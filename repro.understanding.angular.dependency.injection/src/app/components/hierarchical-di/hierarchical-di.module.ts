import { NgModule } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [ParentComponent, ChildComponent],
  exports: [ParentComponent, ChildComponent],
})
export class HierarchicalDiModule {}
