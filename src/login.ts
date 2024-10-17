// login.tsx
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  handleSubmit() {
    // Handle login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}