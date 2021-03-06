import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LocalstorageService } from '../ssr-files/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private ls: LocalstorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    let authToken = this.ls.getItem('token');
    if (authToken?.length) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }

    // no token found, send req as it is.
    return next.handle(req);
  }
}