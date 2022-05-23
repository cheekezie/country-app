import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    regNo: [''],
    password: [''],
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  home() {
    this.router.navigate(['/']);
  }
  login() {
    // login function
  }
}
