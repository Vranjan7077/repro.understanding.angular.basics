import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { User } from '../../core/services/auth.service';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  successMessage: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,

    on(
      AuthActions.login,
      AuthActions.register,
      AuthActions.forgotPassword,
      AuthActions.updateProfile,
      (state) => ({
        ...state,
        loading: true,
        error: null,
        successMessage: null,
      }),
    ),

    on(
      AuthActions.loginSuccess,
      AuthActions.registerSuccess,
      (state, { user }) => ({ ...state, loading: false, user }),
    ),

    on(AuthActions.forgotPasswordSuccess, (state) => ({
      ...state,
      loading: false,
      successMessage: 'Reset link sent to your email',
    })),

    on(AuthActions.updateProfileSuccess, (state, { user }) => ({
      ...state,
      loading: false,
      user,
      successMessage: 'Profile updated successfully',
    })),

    on(
      AuthActions.loginFailure,
      AuthActions.registerFailure,
      AuthActions.forgotPasswordFailure,
      AuthActions.updateProfileFailure,
      (state, { error }) => ({ ...state, loading: false, error }),
    ),

    on(AuthActions.logout, () => ({ ...initialState })),

    on(AuthActions.clearError, (state) => ({
      ...state,
      error: null,
      successMessage: null,
    })),
  ),
});

export const {
  name,
  reducer,
  selectUser,
  selectLoading,
  selectError,
  selectSuccessMessage,
} = authFeature;
