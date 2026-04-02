import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const success = this.auth.login(this.email?.value, this.password?.value);
    success
      ? this.router.navigate(['/home'])
      : alert('Invalid email or password');
  }
}
