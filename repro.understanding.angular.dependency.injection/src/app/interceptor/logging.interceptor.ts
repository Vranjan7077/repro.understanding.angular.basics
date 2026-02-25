import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Original Request URL:', req.url);

  const cloned = req.clone({
    setHeaders: {
      'X-Demo-Header': 'Interceptor-Active',
    },
  });

  return next(cloned);
};
