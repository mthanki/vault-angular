import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LocalstorageService } from 'src/app/ssr-files/localstorage.service';

@Component({
  selector: 'app-login-editor',
  templateUrl: './login-editor.component.html',
  styleUrls: ['./login-editor.component.scss']
})
export class LoginEditorComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  isLoginEnabled = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ls: LocalstorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isLoginEnabled = false;

    this.authService.login(this.loginForm.value).subscribe(userAuthData => {

      this.ls.setItem('userData', JSON.stringify(userAuthData));
      this.ls.setItem('userId', userAuthData.userId);
      this.ls.setItem('token', userAuthData.token);
      this.ls.setItem('isLoggedIn', 'true');

      // const expiration = new Date(new Date().getTime() + 5000);
      // Token expires after 1 Hr
      const expiration = new Date(new Date().getTime() + 1000 * 60 * 60);
      this.ls.setItem('expiration', expiration.toISOString());

      this.router.navigate(['/code-list']);

      this.authService.isLoggedIn = true;
      this.authService.startSessionTimer(expiration);

    }, error => {
      this.isLoginEnabled = true;
    });
  }

  resetForm(): void {
    this.loginForm.reset();
  }
}
