# Angular Dependency Injection Demo

This project is a hands-on Angular 19 playground that demonstrates core and advanced Dependency Injection (DI) patterns side-by-side.

## Stack

- Angular 19 (standalone components)
- TypeScript 5
- RxJS 7
- Karma + Jasmine for unit tests

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npm start
```

3. Open:
```text
http://localhost:4200
```

## Available Scripts

- `npm start` - Run dev server (`ng serve`)
- `npm run build` - Production build
- `npm run watch` - Development build in watch mode
- `npm test` - Run unit tests

## App Structure

- Root route (`/`) renders the DI demo dashboard with all cards.
- Named outlet route (`/(dynamic:lazy)`) renders the lazy DI demo.
- Header buttons in `AppComponent` switch between Home and Lazy views.

## DI Scenarios Covered

### 1) Basic service injection
- `BasicInjectionComponent` injects `LoggerService` and shows instance ID.

### 2) `inject()` function usage
- `InjectFunctionComponent` uses `inject(LoggerService)` and logs a message.

### 3) Root singleton behavior
- `SingletonCptAComponent` and `SingletonCptBComponent` both consume the same `LoggerService` (`providedIn: 'root'`).

### 4) Component-scoped provider
- `ComponentProviderComponent` declares `providers: [LoggerService]`, creating a local instance per component.

### 5) Injection token (`useValue`)
- `TokenInjectionComponent` provides `API_URL` token and injects it.

### 6) Factory provider (`useFactory` + `deps`)
- `FactoryProviderComponent` provides `LoggerService` via `loggerFactory`, using an injected `'API_URL'` dependency.

### 7) Hierarchical DI
- `ParentComponent` provides `LoggerService`; `ChildComponent` resolves the same parent-scoped instance.

### 8) Optional dependency resolution
- `OptionalDiComponent` uses `inject(OptionalService, { optional: true })`.

### 9) EnvironmentInjector access
- `EnvironmentInjectorComponent` resolves `LoggerService` dynamically with `EnvironmentInjector#get`.

### 10) Multi providers
- `MultiProviderComponent` registers `MULTI_LOGGER` with two implementations (`ConsoleLoggerService`, `FileLoggerService`) using `multi: true`.

### 11) HTTP interceptor DI
- `InterceptorDiComponent` makes `HttpClient` calls.
- `main.ts` wires `provideHttpClient(withInterceptors([...]))` with:
  - `authInterceptor`
  - `loggingInterceptor`
  - `errorInterceptor`

### 12) Singleton vs component provider comparison
- `SingletonVsComponentProviderComponent` renders both patterns in one view to compare instance sharing vs per-component instances.

### 13) Lazy route + DI
- `LazyModuleDiComponent` is loaded through a named router outlet and resolves `LoggerService` in the lazy route context.

## Key Files

- `src/main.ts` - App bootstrap + HTTP interceptor providers
- `src/app/app.routes.ts` - Home + lazy routes
- `src/app/services/logger.service.ts` - Core logger service used across demos
- `src/app/tokens/api.token.ts` - Typed injection token example
- `src/app/tokens/multi-logger.token.ts` - Multi-provider token example
- `src/app/components/home/home.component.html` - Dashboard composition of DI demo cards

## Notes

- Most demos display a logger instance ID so you can visually confirm injector scope.
- The app is built for learning and experimentation rather than production architecture.
