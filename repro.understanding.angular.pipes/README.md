# Angular Pipes Playground

A learning-focused Angular 19 app that demonstrates built-in pipes, custom pipes, async data handling, and pure vs impure behavior using small standalone demo components.

## Tech Stack

- Angular 19
- TypeScript
- SCSS
- RxJS

## Getting Started

### Prerequisites

- Node.js 18+ (latest LTS recommended)
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm start
```

The app runs at `http://localhost:4200/`.

## Available Scripts

- `npm start` - start development server
- `npm run build` - create production build
- `npm run watch` - build in watch mode (`development` config)
- `npm test` - run Karma unit tests

## Project Structure

```text
src/
  app/
    components/      # demo feature components
    pipes/           # custom pipe implementations
    services/        # API and counters used by demos
    shared/          # reusable UI components (card/loading/user-item)
    models/          # shared interfaces
```

## App Composition

- The app is bootstrapped with `bootstrapApplication` in `src/main.ts`.
- `AppComponent` renders demo components directly in `src/app/app.component.html`.
- Router is configured, but `src/app/app.routes.ts` currently exports an empty route array.
- `ComponentsModule` aggregates and exports standalone demo components.

## Data Sources

`UserServiceService` uses JSONPlaceholder:

- `/users`
- `/posts`
- `/todos`
- `/photos`
- `/comments`
- `/albums`

Service methods return fallback empty arrays on HTTP errors.

## Demo Components (Currently Rendered)

From `src/app/app.component.html`:

- `multiply-pipes` - custom `multiply` pipe (`number * factor`)
- `async-pipes` - `async` pipe on an observable greeting
- `object-format-pipe` - custom user formatter (`objectFormatPipe`)
- `slice-pipes` - built-in `slice` for post title/body snippets
- `text-pipes` - `uppercase`, `lowercase`, `titlecase`
- `number-pipes` - `currency`, `number`, `percent`
- `date-pipes` - built-in date formats
- `custom-pipes` - custom `capitalize` pipe
- `chaining-pipe` - chained built-in pipes in one expression
- `filter-pipes` - custom name filter with search input
- `http-async-pipe` - `async` pipe with HTTP user list
- `debug-pipe` - custom debug pipe plus JSON visualization
- `json-pipes` - built-in `json` output for selected user
- `sort-pipe` - custom sort for todos (`completed`, `title`, `id`)
- `pure-vs-impure-pipe` - side-by-side pure/impure pipe execution counters

## Additional Demo In Repo

- `default-pipe` exists in `src/app/components/default-pipe` and demonstrates fallback text via `defaultPipe`, but it is not currently mounted in `AppComponent`.

## Custom Pipes

Defined in `src/app/pipes`:

- `capitalize` - uppercase first character
- `multiply` - multiplies numeric value by a factor
- `filter` - filters users by `name` using search text
- `sortPipe` - type-safe generic sort (`keyof T & string`) for strings, numbers, booleans
- `defaultPipe` - fallback value for empty/blank strings
- `debugPipe` - logs and returns the original value
- `objectFormatPipe` - formats user object for display
- `pureFilter` - pure pipe used for execution behavior demo
- `impureFilter` - impure pipe used for execution behavior demo

## Notes

- Most demo components are standalone and imported through `ComponentsModule` for convenience.
- `sort-pipe` component uses `sortField: keyof Todo` to keep template pipe arguments type-safe.
- `PipeCounterService` uses Angular signals to track pure and impure pipe execution counts.

## Screenshot

![Angular Pipes Demo](screenshots/localhost_4200.png)
