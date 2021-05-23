import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup-editor',
  templateUrl: './signup-editor.component.html',
  styleUrls: ['./signup-editor.component.scss']
})
export class SignupEditorComponent implements OnInit {
  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.signup(this.signUpForm.value).subscribe(userAuthData => {
      localStorage.setItem('userData', JSON.stringify(userAuthData));
      localStorage.setItem('userId', userAuthData.userId);
      localStorage.setItem('token', userAuthData.token);
      localStorage.setItem('isLoggedIn', 'true');

      this.authService.isLoggedIn = true;

      const expiration = new Date(new Date().getTime() + 1000 * 60 * 60);
      localStorage.setItem('expiration', expiration.toISOString());

      this.authService.startSessionTimer(expiration);

      this.router.navigate(['/add-to-list']);
    });
  }

  resetForm(): void {
    this.signUpForm.reset();
  }

}
