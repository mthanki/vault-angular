import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { DataService } from './http/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vault';

  static isBrowser = new BehaviorSubject<boolean>(false);

  constructor(
    // avoid circular dependency error
    private authService: AuthService,
    private dataService: DataService,
    updates: SwUpdate,
    private _snackbar: MatSnackBar,
    @Inject(PLATFORM_ID) private platformId: any) {

    // Detect if browser for SSR
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));

    this.dataService.setAuthService(this.authService);

    updates.available.subscribe(event => {
      let snackBarRef = this._snackbar.open("New Version Available", "Update", {
        duration: 5000,
      });
      snackBarRef.onAction().subscribe(() => {
        updates.activateUpdate().then(() => document.location.reload());
      });
    });
  }

}
