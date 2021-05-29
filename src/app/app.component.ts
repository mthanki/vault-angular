import { Component } from '@angular/core';
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
    private dataService: DataService) {

    this.dataService.setAuthService(this.authService);
  }


}
