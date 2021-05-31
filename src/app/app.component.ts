import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { AuthService } from './auth/auth.service';
import { DataService } from './http/data.service';


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
    private dataService: DataService,
    updates: SwUpdate,
    private _snackbar: MatSnackBar) {

    this.dataService.setAuthService(this.authService);

    updates.available.subscribe(event => {
      let snackBarRef = this._snackbar.open("New Version Available", "Update");
      snackBarRef.onAction().subscribe(() => {
        updates.activateUpdate().then(() => document.location.reload());
      });
    });
  }

}
