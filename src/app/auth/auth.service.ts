import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DataService } from '../http/data.service';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { StorageMap } from '@ngx-pwa/local-storage';

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
    private asyncStorage: StorageMap
  ) {
    const token = this.getAuthorizationToken();
    let expiration: any = localStorage.getItem('expiration');
    expiration = new Date(expiration);

    if (!!token && expiration > new Date()) {
      this.isLoggedIn = true;

      const remainingTime = expiration.getTime() - new Date().getTime();
      this.logoutTimer = setTimeout(() => {
        this.logout();
      }, remainingTime);
    } else {
      this.logout();
      // this.router.navigate(['login']);
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
    // this.router.navigate(['/login']);
    clearTimeout(this.logoutTimer);
  }

}
