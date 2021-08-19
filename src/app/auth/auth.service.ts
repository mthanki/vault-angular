import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../http/data.service';
import { LocalstorageService } from '../ssr-files/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUrl = "users";
  isLoggedIn = true;
  redirectUrl = "/";
  logoutTimer: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private ls: LocalstorageService,
  ) {
    const token = this.getAuthorizationToken();
    let expiration: any;
    expiration = this.ls.getItem('expiration');
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
    return this.ls.getItem('token');
  }

  logout() {
    this.ls.clear();
    this.isLoggedIn = false;
    clearTimeout(this.logoutTimer);
  }

  startSessionTimer(expiration: Date) {
    const remainingTime = expiration.getTime() - new Date().getTime();
    this.logoutTimer = setTimeout(() => {
      // this.logout();
      // this.router.navigate(['/login']);
      // this._snackBar.open("Session timed Out, please Login again.");
    }, remainingTime);
  }

}
