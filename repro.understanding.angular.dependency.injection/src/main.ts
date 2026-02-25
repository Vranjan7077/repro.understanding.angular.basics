import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { authInterceptor } from './app/interceptor/auth.interceptor';
import { loggingInterceptor } from './app/interceptor/logging.interceptor';
import { errorInterceptor } from './app/interceptor/error-interceptor.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor, errorInterceptor]),
    ),
  ],
}).catch((err) => console.error(err));
