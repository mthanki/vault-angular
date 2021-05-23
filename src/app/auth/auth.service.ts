import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../http/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUrl = "users";
  isLoggedIn = false;
  redirectUrl = "/";
  logoutTimer: any;

  constructor(
    private dataService: DataService,
    private router: Router,
  ) {
    const token = this.getAuthorizationToken();
    let expiration: any = localStorage.getItem('expiration');
    expiration = new Date(expiration);

    if (!!token && expiration > new Date()) {
      this.isLoggedIn = true;

      this.startSessionTimer(expiration);
    } else {
      this.logout();
    }
  }

  signup(userData: any) {
    return this.dataService.post(`${this.userUrl}/signup`, userData);
  }

  login(credentials: any) {
    return this.dataService.post(`${this.userUrl}/login`, credentials);
  }

  getAuthorizationToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
    clearTimeout(this.logoutTimer);
  }

  startSessionTimer(expiration: Date) {
    const remainingTime = expiration.getTime() - new Date().getTime();
    this.logoutTimer = setTimeout(() => {
      this.logout();
      this.router.navigate(['/login']);
    }, remainingTime);
  }

}
