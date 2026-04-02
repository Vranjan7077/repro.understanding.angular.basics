import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthActions } from '../../store/auth/auth.actions';
import { authFeature } from '../../store/auth/auth.reducer';
import { User } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileForm!: FormGroup;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  success$!: Observable<string | null>;
  user$!: Observable<User | null>;

  private userSub!: Subscription;
  private successSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(authFeature.selectLoading);
    this.error$ = this.store.select(authFeature.selectError);
    this.success$ = this.store.select(authFeature.selectSuccessMessage);
    this.user$ = this.store.select(authFeature.selectUser);

    this.profileForm = this.fb.nonNullable.group({
      name: ['', Validators.required],
      email: [{ value: '', disabled: true }],
    });

    this.userSub = this.user$.subscribe((user) => {
      if (user) {
        this.profileForm.patchValue({
          name: user.name,
          email: user.email,
        });
      }
    });

    this.successSub = this.success$.subscribe((msg) => {
      if (msg) {
        setTimeout(() => this.store.dispatch(AuthActions.clearError()), 3000);
      }
    });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
    this.successSub?.unsubscribe();
  }

  get name() {
    return this.profileForm.get('name');
  }

  onUpdate(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    this.user$.pipe(take(1)).subscribe((user) => {
      if (user?.id) {
        this.store.dispatch(
          AuthActions.updateProfile({
            id: user.id,
            data: { name: this.name?.value },
          }),
        );
      }
    });
  }

  onLogout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
