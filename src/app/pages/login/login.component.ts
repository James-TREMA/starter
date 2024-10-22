import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value)
    }
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
}
