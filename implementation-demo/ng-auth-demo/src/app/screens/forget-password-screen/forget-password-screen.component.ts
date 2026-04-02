import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password-screen',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './forget-password-screen.component.html',
  styleUrls: ['./forget-password-screen.component.scss'],
})
export class ForgetPasswordScreenComponent implements OnInit {
  forgotForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.forgotForm.get('email');
  }

  onSubmit(): void {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }
    console.log(this.forgotForm.value);
    this.router.navigate(['/']);
  }
}
