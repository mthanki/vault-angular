import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LocalstorageService } from 'src/app/ssr-files/localstorage.service';
import { passwordsMatchValidator, passwordsPolicyValidator, whiteSpaceValidator } from '../../validators/passworsd-match-validator.directive';

@Component({
  selector: 'app-signup-editor',
  templateUrl: './signup-editor.component.html',
  styleUrls: ['./signup-editor.component.scss']
})
export class SignupEditorComponent implements OnInit {
  isSignUpDisabled = false;

  signUpForm = this.fb.group({
    name: ['', [Validators.required, whiteSpaceValidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordsPolicyValidator, whiteSpaceValidator]],
    reenteredPassword: ['', Validators.required]
  }, { validators: passwordsMatchValidator });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ls: LocalstorageService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.isSignUpDisabled = true;
    this.authService.signup(this.signUpForm.value).subscribe(userAuthData => {
      this.ls.setItem('userData', JSON.stringify(userAuthData));
      this.ls.setItem('userId', userAuthData.userId);
      this.ls.setItem('token', userAuthData.token);
      this.ls.setItem('isLoggedIn', 'true');

      this.authService.isLoggedIn = true;

      const expiration = new Date(new Date().getTime() + 1000 * 60 * 60);
      this.ls.setItem('expiration', expiration.toISOString());

      this.authService.startSessionTimer(expiration);

      this.router.navigate(['/add-to-list']);
    },
      errors => {
        this.isSignUpDisabled = false;
      });
  }

  resetForm(): void {
    this.signUpForm.reset();
  }

}
