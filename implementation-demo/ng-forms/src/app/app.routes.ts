import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormDetailsComponent } from './components/form-details/form-details.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'template', component: TemplateDrivenFormComponent },
  { path: 'details', component: FormDetailsComponent },
];
