import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    let authToken = localStorage.getItem('token');
    if (authToken?.length) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        // JSON.stringify to suppress error
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }

    // no token found, send req as it is.
    return next.handle(req);
  }
}