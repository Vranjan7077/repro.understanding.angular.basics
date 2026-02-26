import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { loggingInterceptor } from './interceptor/logging.interceptor';
import { authInterceptor } from './interceptor/auth.interceptor';
import { refreshInterceptor } from './interceptor/refresh.interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        loggingInterceptor,
        authInterceptor,
        refreshInterceptor,
      ]),
    ),
  ],
};
