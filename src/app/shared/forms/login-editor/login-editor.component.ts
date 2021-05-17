import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-editor',
  templateUrl: './login-editor.component.html',
  styleUrls: ['./login-editor.component.scss']
})
export class LoginEditorComponent implements OnInit {
  loginForm = this.fb.group({
    nameOrEmail: ['', Validators.required],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  resetForm(): void {
    this.loginForm.reset();
  }
}
