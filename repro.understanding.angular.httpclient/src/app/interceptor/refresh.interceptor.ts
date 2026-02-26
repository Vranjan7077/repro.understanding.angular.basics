import { HttpInterceptorFn } from '@angular/common/http';

export const refreshInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.setItem('token', 'new-token');
  }

  return next(req);
};
