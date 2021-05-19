import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataService } from '../http/data.service';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUrl = "users";
  isLoggedIn = false;
  // isLoggedIn$ = new Subject();
  redirectUrl = "/";

  constructor(
    private dataService: DataService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
    const token = this.getAuthorizationToken();
    this.isLoggedIn = !!token;
  }

  signup(userData: any) {
    return this.dataService.post(`${this.userUrl}/signup`, userData);
  }

  login(credentials: any) {
    return this.dataService.post(`${this.userUrl}/login`, credentials);
  }

  getAuthorizationToken() {
    return this.localStorage.get('token');
  }

  logout() {
    this.localStorage.remove('token');
    this.localStorage.remove('userId');
    this.localStorage.remove('userData');

    this.isLoggedIn = false;

    // this.isLoggedIn$.next(this.isLoggedIn);

    console.log('Logged Out!');
    this.router.navigate(['/login']);
  }

}
