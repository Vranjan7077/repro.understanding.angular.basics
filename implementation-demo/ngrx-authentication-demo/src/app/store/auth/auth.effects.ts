import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthActions } from './auth.actions';
import { AuthService } from '../../core/services/auth.service';

@Injectable()
export class AuthEffects {
  login$: any;
  loginSuccess$: any;
  register$: any;
  registerSuccess$: any;
  forgotPassword$: any;
  updateProfile$: any;
  logout$: any;

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router,
  ) {
    this.login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        switchMap(({ email, password }) =>
          this.auth.login(email, password).pipe(
            map((user) => AuthActions.loginSuccess({ user })),
            catchError((err) =>
              of(
                AuthActions.loginFailure({
                  error: this.auth.getErrorMessage(err.message),
                }),
              ),
            ),
          ),
        ),
      ),
    );

    this.loginSuccess$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(AuthActions.loginSuccess),
          tap(() => this.router.navigate(['/profile'])),
        ),
      { dispatch: false },
    );

    this.register$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.register),
        switchMap(({ user }) =>
          this.auth.register(user).pipe(
            map((newUser) => AuthActions.registerSuccess({ user: newUser })),
            catchError((err) =>
              of(
                AuthActions.registerFailure({
                  error: this.auth.getErrorMessage(err.message),
                }),
              ),
            ),
          ),
        ),
      ),
    );

    this.registerSuccess$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(AuthActions.registerSuccess),
          tap(() => this.router.navigate(['/profile'])),
        ),
      { dispatch: false },
    );

    this.forgotPassword$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.forgotPassword),
        switchMap(({ email }) =>
          this.auth.forgotPassword(email).pipe(
            map(() => AuthActions.forgotPasswordSuccess()),
            catchError((err) =>
              of(
                AuthActions.forgotPasswordFailure({
                  error: this.auth.getErrorMessage(err.message),
                }),
              ),
            ),
          ),
        ),
      ),
    );

    this.updateProfile$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.updateProfile),
        switchMap(({ id, data }) =>
          this.auth.updateProfile(id, data).pipe(
            map((user) => AuthActions.updateProfileSuccess({ user })),
            catchError((err) =>
              of(
                AuthActions.updateProfileFailure({
                  error: this.auth.getErrorMessage(err.message),
                }),
              ),
            ),
          ),
        ),
      ),
    );

    this.logout$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(AuthActions.logout),
          tap(() => this.router.navigate(['/login'])),
        ),
      { dispatch: false },
    );
  }
}
