import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormDetailsComponent } from './form-details/form-details.component';

const components = [
  HomePageComponent,
  NavigationComponent,
  ReactiveFormComponent,
  TemplateDrivenFormComponent,
  FormDetailsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ...components,
  ],
  exports: components,
})
export class ComponentsModule {}
