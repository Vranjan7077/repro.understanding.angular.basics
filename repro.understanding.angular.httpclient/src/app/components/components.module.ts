import { NgModule } from '@angular/core';
import { HttpGetComponent } from './http-get/http-get.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { HttpPostComponent } from './http-post/http-post.component';
import { HttpPutComponent } from './http-put/http-put.component';
import { HttpDeleteComponent } from './http-delete/http-delete.component';
import { HttpLoadingComponent } from './http-loading/http-loading.component';
import { HttpErrorComponent } from './http-error/http-error.component';
import { HttpForkJoinComponent } from './http-fork-join/http-fork-join.component';
import { HttpSwitchMapComponent } from './http-switch-map/http-switch-map.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { JwtAuthComponent } from './jwt-auth/jwt-auth.component';
import { CachingComponent } from './caching/caching.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SearchablePaginationComponent } from './searchable-pagination/searchable-pagination.component';

const standaloneComponents = [
  HttpGetComponent,
  AsyncPipeComponent,
  HttpPostComponent,
  HttpPutComponent,
  HttpDeleteComponent,
  HttpLoadingComponent,
  HttpErrorComponent,
  HttpForkJoinComponent,
  HttpSwitchMapComponent,
  HttpInterceptorComponent,
  JwtAuthComponent,
  CachingComponent,
  PaginationComponent,
  FilteringComponent,
  SearchablePaginationComponent,
];

@NgModule({
  imports: [...standaloneComponents],
  exports: [...standaloneComponents],
})
export class ComponentsModule {}
