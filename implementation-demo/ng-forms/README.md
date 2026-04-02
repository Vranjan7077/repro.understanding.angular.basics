# Ng Forms

An Angular 19 demo app for learning and comparing template-driven forms and reactive forms.

The application includes:

- A home page with navigation between form examples
- A template-driven form with grouped fields, inline validation, autofill helpers, submit, and reset actions
- A reactive form with nested address groups, custom validation, automatic address syncing, submit, and reset actions
- A details page that displays submitted reactive-form data from router query params
- Reusable validators, a trim directive, and a validation service for form-related utilities

## Tech Stack

- Angular 19
- Angular Forms (`FormsModule` and `ReactiveFormsModule`)
- Angular Router
- SCSS
- Bootstrap 5
- Angular Material theme stylesheet

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/template` | Template-driven form demo |
| `/reactive` | Reactive form demo |
| `/details` | Submitted reactive-form data view |

## Implemented Features

### Template-driven form

The template-driven example is implemented in `src/app/components/template-driven-form` and demonstrates:

- `ngForm` with `ngModelGroup`
- Required, `minlength`, `pattern`, and `email` validation
- Inline validation messages for each field
- `setValue()` to autofill the complete form
- `patchValue()` to autofill only part of the form
- Form submission and local display of submitted values
- Resetting both form state and submission result

Fields:

- First name
- Last name
- Email
- Password

### Reactive form

The reactive example is implemented in `src/app/components/reactive-form` and demonstrates:

- `FormBuilder`-based form creation
- Nested `FormGroup` structures for current and permanent addresses
- Built-in validators such as `required`, `minLength`, `maxLength`, `pattern`, and `email`
- Custom validator usage for pincode whitespace checks
- A custom trim directive on blur for selected fields
- A "Same as Current Address" checkbox that mirrors current address values into the permanent address section
- Submit navigation to the details page using serialized query params
- Reset handling for the form and address-sync toggle

Fields:

- First name
- Last name
- Email address
- Mobile number
- Gender
- Current address
- Permanent address

## Validation Utilities

The project already contains a few reusable helpers under `src/app/validators`, `src/app/directives`, and `src/app/services`.

### Custom validators

- `cannotContainSpace` prevents spaces in a control value
- `noWhitespaceValidator` rejects values that are only whitespace
- `passwordStrengthValidator` checks uppercase, lowercase, number, and special character rules
- `matchPasswordValidator` compares two controls inside a group
- `onlyLettersValidator` allows only alphabetic characters and spaces

### Other helpers

- `TrimDirective` trims input and textarea values on blur and re-emits form events
- `ValidationService` maps common Angular validation errors to readable messages
- `Regex` centralizes reusable regex patterns used by the forms

Note: not every validator/helper is currently wired into the visible UI, but they are available in the codebase for extension.

## Styling Notes

- Bootstrap is loaded globally from `angular.json`
- An Angular Material prebuilt theme is also included
- Global SCSS adds touched valid/invalid border and focus styling for `.form-control`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open `http://localhost:4200/` in the browser.

## Available Scripts

```bash
npm start
npm run build
npm run watch
npm test
```

## Build Output

Production builds are generated in:

```bash
dist/ng-forms
```

## Suggested Learning Areas

This project is a good base for practicing:

- Differences between template-driven and reactive forms
- Custom validators and shared validation helpers
- Nested form groups
- Form state handling (`touched`, `dirty`, `invalid`, `reset`)
- Router-based data handoff between pages
