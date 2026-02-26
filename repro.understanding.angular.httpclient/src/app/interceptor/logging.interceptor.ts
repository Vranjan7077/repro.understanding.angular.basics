import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const start = Date.now();
  console.log(`[Request]  ${req.method} ${req.url}`);

  return next(req).pipe(
    tap({
      next: (event) => {
        const duration = Date.now() - start;
        console.log(`[Response] ${req.method} ${req.url} — ${duration}ms`);
      },
      error: (err) => {
        const duration = Date.now() - start;
        console.error(
          `[Error]    ${req.method} ${req.url} — ${duration}ms`,
          err.status,
        );
      },
    }),
  );
};
