import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe(userAuthData => {
      console.log(userAuthData);

      localStorage.setItem('userData', JSON.stringify(userAuthData));
      localStorage.setItem('userId', userAuthData.userId);
      localStorage.setItem('token', userAuthData.token);
      localStorage.setItem('isLoggedIn', 'true');

      // const expiration = new Date(new Date().getTime() + 5000);
      const expiration = new Date(new Date().getTime() + 1000 * 60 * 60);
      localStorage.setItem('expiration', expiration.toISOString());

      this.router.navigate(['/code-list']);

      this.authService.isLoggedIn = true;
      this.authService.startSessionTimer(expiration);

    });
  }

  resetForm(): void {
    this.loginForm.reset();
  }
}
