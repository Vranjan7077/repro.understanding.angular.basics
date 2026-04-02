import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  startWith,
  switchMap,
  tap,
  takeUntil,
} from 'rxjs/operators';

import { cannotContainSpace } from '../../validators/space.validator';
import { Regex } from '../../validations/regex';
import { TrimDirective } from '../../directives/trim.directive';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TrimDirective],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  userDetailsForm!: FormGroup;

  isSameAddressControl: FormControl = new FormControl(false);

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.userDetailsForm = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(Regex.name_regex),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(Regex.name_regex),
        ],
      ],
      emailAddress: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(Regex.email_regex),
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['male'],

      currentAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        pincode: [
          '',
          [
            Validators.required,
            cannotContainSpace,
            Validators.pattern(Regex.zipPattern),
          ],
        ],
      }),

      permanentAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        pincode: [
          '',
          [
            Validators.required,
            cannotContainSpace,
            Validators.pattern(Regex.zipPattern),
          ],
        ],
      }),
    });
  }

  ngOnInit(): void {
    this.handleAddressSync();
  }

  handleAddressSync() {
    const currentAddress = this.userDetailsForm.get('currentAddress');
    const permanentAddress = this.userDetailsForm.get('permanentAddress');

    this.isSameAddressControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        switchMap((checked: boolean) => {
          if (checked && currentAddress && permanentAddress) {
            return currentAddress.valueChanges.pipe(
              startWith(currentAddress.value),
              tap((value) => permanentAddress.patchValue(value)),
            );
          }

          permanentAddress?.reset();
          return EMPTY;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  sendData() {
    if (this.userDetailsForm.invalid) {
      this.userDetailsForm.markAllAsTouched();
      return;
    }

    const data = this.userDetailsForm.getRawValue();

    this.router.navigate(['/details'], {
      queryParams: { data: JSON.stringify(data) },
    });
  }

  resetData(): void {
    this.userDetailsForm.reset();
    this.isSameAddressControl.setValue(false);
    console.log('Form reset');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
