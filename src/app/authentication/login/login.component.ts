import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public cmService: CommonService
  ) {}

  ngOnInit(): void {
    //send sms form
    this.loginForm = this.fb.group({
      username: [, [Validators.maxLength(10)]],
      password: [, [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      var a = this.loginForm.value.username;
      if (
        this.loginForm.value.username == 'test123' &&
        this.loginForm.value.password == 'test123'
      ) {
        console.log('yes');
        localStorage.setItem('auth_token', 'token');
        this.router.navigate(['/dashboard']);
      } else {
        alert('username not found');
      }
      // this.cmService.logIn(this.loginForm.value).subscribe(
      //   (res) => {
      //     console.log(res);
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
    } else {
      alert('Enter username And Password');
    }

    console.log(this.loginForm.value);
  }
}
