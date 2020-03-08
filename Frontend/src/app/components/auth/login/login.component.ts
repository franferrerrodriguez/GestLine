import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.class';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = {
    email: '',
    password: '',
    document: '',
    phoneNumber: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    if (form.valid) {
      this.user.password = CryptoJS.MD5(this.user.password).toString();
      return this.authService
      .loginUser(this.user)
      .subscribe(
        data => {
          if(data.error != null){
            this.user.password = '';
          }else{
            console.log(data);
            this.authService.setUser(this.user);
            this.authService.setToken(data.result.id);
            this.router.navigate(['lines-dashboard']);
          }
        },
        error => {
          console.log(error);
        }
      );
    }else{
      console.log('Form not valid.');
    }
  }

}