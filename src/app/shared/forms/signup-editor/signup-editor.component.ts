import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  resetForm(): void {
    this.signUpForm.reset();
  }

}
