import { NgModule } from '@angular/core';
import { AsyncPipesComponent } from './async-pipes/async-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { DatePipesComponent } from './date-pipes/date-pipes.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { MultiplyPipesComponent } from './multiply-pipes/multiply-pipes.component';
import { NumberPipesComponent } from './number-pipes/number-pipes.component';
import { SlicePipesComponent } from './slice-pipes/slice-pipes.component';
import { TextPipesComponent } from './text-pipes/text-pipes.component';
import { JsonPipesComponent } from './json-pipes/json-pipes.component';
import { CardComponent } from '../shared/card/card.component';
import { PureVsImpurePipeComponent } from './pure-vs-impure-pipe/pure-vs-impure-pipe.component';
import { SortPipeComponent } from './sort-pipe/sort-pipe.component';
import { ChainingPipeComponent } from './chaining-pipe/chaining-pipe.component';
import { DebugPipeComponent } from './debug-pipe/debug-pipe.component';
import { DefaultPipeComponent } from './default-pipe/default-pipe.component';
import { HttpAsyncPipeComponent } from './http-async-pipe/http-async-pipe.component';
import { ObjectFormatPipeComponent } from './object-format-pipe/object-format-pipe.component';

const components = [
  AsyncPipesComponent,
  CustomPipesComponent,
  DatePipesComponent,
  FilterPipesComponent,
  MultiplyPipesComponent,
  NumberPipesComponent,
  SlicePipesComponent,
  TextPipesComponent,
  JsonPipesComponent,
  CardComponent,
  PureVsImpurePipeComponent,
  SortPipeComponent,
  ChainingPipeComponent,
  DebugPipeComponent,
  DefaultPipeComponent,
  HttpAsyncPipeComponent,
  ObjectFormatPipeComponent,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class ComponentsModule {}
