import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  @ViewChild('form') signUpForm!: NgForm;

  formSubmitted = false;

  getUserDetails = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  onSubmit(): void {
    if (this.signUpForm.invalid) return;

    const formValue = this.signUpForm.value;

    this.formSubmitted = true;

    this.getUserDetails = {
      firstname: formValue.checkUserDetails.firstname,
      lastname: formValue.checkUserDetails.lastname,
      email: formValue.email,
      password: formValue.password,
    };

    this.signUpForm.resetForm();
  }

  autoFillAllValues(): void {
    this.signUpForm.form.setValue({
      checkUserDetails: {
        firstname: 'John',
        lastname: 'Wick',
      },
      email: 'john@wick.com',
      password: 'John@123',
    });
  }

  autoFillBasicValues(): void {
    this.signUpForm.form.patchValue({
      checkUserDetails: {
        firstname: 'John',
        lastname: 'Wick',
      },
    });
  }

  resetFormValues(): void {
    this.signUpForm.resetForm();
    this.formSubmitted = false;
  }
}
