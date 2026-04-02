import { createSelector } from '@ngrx/store';
import { authFeature } from './auth.reducer';

export const selectIsLoggedIn = createSelector(
  authFeature.selectUser,
  (user) => !!user,
);

export const selectUserName = createSelector(
  authFeature.selectUser,
  (user) => user?.name ?? '',
);
