import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  url!: Observable<string>;
  isSignUp: boolean = true;
  heading: String = 'Sign Up';

  constructor(route: ActivatedRoute) {
    this.url = route.url.pipe(map(segments => segments.join('')));
  }

  ngOnInit(): void {
    this.url.subscribe(segment => {
      if (segment !== 'signup') {
        this.isSignUp = false;
        this.heading = 'Log In';
      }
    });
  }
}
