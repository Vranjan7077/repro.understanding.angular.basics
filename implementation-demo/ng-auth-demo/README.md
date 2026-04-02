# NgAuthDemo

`NgAuthDemo` is a small Angular 19 authentication demo built with standalone components, Angular Material, and reactive forms. It demonstrates a simple register/login flow, route protection with a guard, and client-side session persistence using `localStorage`.

## What The App Does

- Lets a user register with name, email, and password.
- Stores registered users in `localStorage` under `users`.
- Stores the active session in `localStorage` using `currentUser` and `isLoggedIn`.
- Lets an existing user log in and navigate to a protected home page.
- Blocks direct access to `/home` unless the user is logged in.
- Includes a forgot-password screen with email validation and a redirect back to login after submit.

## Routes

- `/` - Login screen
- `/register` - Registration screen
- `/forgot-password` - Forgot password screen
- `/home` - Protected home page

## Validation Rules

### Login

- Email is required and must be valid.
- Password is required and must be at least 6 characters.

### Register

- Name is required.
- Email is required, must be valid, and must be unique against the `users` array in `localStorage`.
- Password is required, must be at least 8 characters, and must include:
  - one uppercase letter
  - one lowercase letter
  - one number
  - one special character
- Confirm password is required and must match the password.

### Forgot Password

- Email is required and must be valid.
- Submitting the form currently logs the value to the console and redirects to the login page.

## Tech Stack

- Angular 19
- Angular Router
- Angular Reactive Forms
- Angular Material
- RxJS `BehaviorSubject` for auth state

## Project Notes

- This is a front-end demo only. There is no backend, token handling, or real password reset flow.
- Authentication state is persisted in the browser, so refreshing the page keeps the session if `isLoggedIn` and `currentUser` are still present.
- Registration stores each user in the `users` array, while login checks the `currentUser` entry for authentication.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open `http://localhost:4200/`.

## Available Scripts

- `npm start` - Run the Angular dev server
- `npm run build` - Create a production build
- `npm run watch` - Build in watch mode using the development configuration
- `npm test` - Run unit tests with Karma

## Suggested Demo Flow

1. Open the app and go to `Register`.
2. Create a new account.
3. You will be redirected to the protected home page.
4. Log out and sign back in with the same credentials.
5. Try opening `/home` while logged out to see the guard redirect back to login.
