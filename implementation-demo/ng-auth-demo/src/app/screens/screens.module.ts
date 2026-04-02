import { NgModule } from '@angular/core';
import { ForgetPasswordScreenComponent } from './forget-password-screen/forget-password-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';

const screens = [
  ForgetPasswordScreenComponent,
  LoginScreenComponent,
  RegisterScreenComponent,
];

@NgModule({
  imports: [...screens],
  exports: [...screens],
})
export class ScreensModule {}
