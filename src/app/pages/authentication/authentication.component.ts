import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  url!: Observable<string>;
  isSignUp: boolean = true;
  heading: String = 'Sign Up';

  constructor(route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.url = route.url.pipe(map(segments => segments.join('')));
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['code-list']);
    }

    this.url.subscribe(segment => {
      if (segment !== 'signup') {
        this.isSignUp = false;
        this.heading = 'Log In';
      }
    });
  }
}
