import { Routes } from '@angular/router';
import { ForgetPasswordScreenComponent } from './screens/forget-password-screen/forget-password-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent,
    pathMatch: 'full',
    title: 'Login',
  },
  { path: 'register', component: RegisterScreenComponent, title: 'Register' },
  {
    path: 'forgot-password',
    component: ForgetPasswordScreenComponent,
    title: 'Forgot Password',
  },
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Home',
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];
