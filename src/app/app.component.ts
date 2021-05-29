import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DataService } from './http/data.service';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vault';

  // avoid circular dependency error
  constructor(
    private authService: AuthService,
    private dataService: DataService) {

    this.dataService.setAuthService(this.authService);

    this.createOnline$().subscribe(isOnline => console.log(isOnline));
  }

  createOnline$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }
}
