# NgRx Authentication Demo

An Angular 19 authentication demo built with standalone components, Angular Material, and NgRx Store/Effects. The app uses `json-server` as a mock backend and includes login, registration, forgot-password, profile update, and route protection flows.

## What the app includes

- Login with email and password
- Register with form validation and duplicate-email check
- Forgot password flow with success/error feedback
- Protected profile page for logged-in users
- Profile name update
- Guest-only routes for `login`, `register`, and `forgot-password`
- NgRx Store state for `user`, `loading`, `error`, and `successMessage`
- NgRx Effects for API calls and navigation side effects
- Redux DevTools support via `@ngrx/store-devtools`

## Tech stack

- Angular 19
- NgRx Store + Effects
- Angular Material
- Reactive Forms
- `json-server` for a local mock API

## Routes

| Route | Access | Purpose |
| --- | --- | --- |
| `/login` | Guest only | Sign in with an existing account |
| `/register` | Guest only | Create a new account |
| `/forgot-password` | Guest only | Simulate password reset lookup |
| `/profile` | Auth only | View profile, update name, log out |

## Local setup

Install dependencies:

```bash
npm install
```

Start the mock API:

```bash
npm run json-server
```

In a second terminal, start Angular:

```bash
npm start
```

Open `http://localhost:4200/`.

## Demo account

The seeded user in [`db.json`](./db.json) is:

- Email: `v@v.com`
- Password: `Lorem@1234`

You can also register a new user from the app.

## Validation behavior

### Login

- `email` is required and must be valid
- `password` is required and must be at least 6 characters

### Register

- `name` is required
- `email` is required and must be valid
- `password` must be at least 8 characters
- `password` must include a lowercase letter, an uppercase letter, a number, and a special character
- `confirmPassword` must match `password`

### Forgot password

- Accepts a valid email
- Shows a success message when the email exists in the mock backend

## NgRx flow

Authentication state lives in the `auth` feature store and contains:

- `user`
- `loading`
- `error`
- `successMessage`

Implemented auth actions:

- `login`
- `loginSuccess`
- `loginFailure`
- `register`
- `registerSuccess`
- `registerFailure`
- `forgotPassword`
- `forgotPasswordSuccess`
- `forgotPasswordFailure`
- `updateProfile`
- `updateProfileSuccess`
- `updateProfileFailure`
- `logout`
- `clearError`

Effects currently handle:

- login request + redirect to `/profile`
- register request + redirect to `/profile`
- forgot-password request
- profile update request
- logout redirect to `/login`

## Project structure

```text
src/app/
  core/
    guards/
    services/
    interceptors/
  features/
    login/
    register/
    forgot-password/
    profile/
  store/
    auth/
      auth.actions.ts
      auth.effects.ts
      auth.reducer.ts
      auth.selectors.ts
```

## Mock API

The app talks to `http://localhost:3000/users` through [`src/app/core/services/auth.service.ts`](./src/app/core/services/auth.service.ts).

Current mock backend behavior:

- login fetches by email and validates password on the client side
- register rejects duplicate emails before creating a new user
- forgot password only checks whether the email exists
- profile update sends a `PATCH` request for the user record

## Current limitations

- Authentication is stored only in NgRx state, so refresh clears the session
- No real password reset email is sent
- No real backend auth, token handling, or authorization exists
- [`src/app/core/interceptors/auth.interceptor.ts`](./src/app/core/interceptors/auth.interceptor.ts) is currently just a placeholder

## Useful scripts

```bash
npm start
npm run json-server
npm run build
npm test
```
