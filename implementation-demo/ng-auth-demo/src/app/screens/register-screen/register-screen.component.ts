import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService, User } from '../../service/auth.service';

const STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

@Component({
  selector: 'app-register-screen',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss'],
})
export class RegisterScreenComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.nonNullable.group(
      {
        name: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email],
          [this.uniqueEmailValidator.bind(this)],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(STRONG_PASSWORD),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator },
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const { password, confirmPassword } = (control as FormGroup).value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  uniqueEmailValidator(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const emailExists = users.some(
        (u) => u.email === control.value.trim().toLowerCase(),
      );
      resolve(emailExists ? { emailTaken: true } : null);
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.saveUser();
    this.router.navigate(['/home']);
  }

  private saveUser(): void {
    const user: User = {
      name: this.name?.value.trim(),
      email: this.email?.value.trim().toLowerCase(),
      password: this.password?.value,
    };

    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    this.auth.register(user);
  }

  isPasswordMismatch(): boolean {
    return (
      this.registerForm.hasError('mismatch') && !!this.confirmPassword?.touched
    );
  }
}
