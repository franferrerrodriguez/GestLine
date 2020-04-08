import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.class';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading:boolean;
  public error:string;

  public user: User = {
    email: '',
    password: '',
    document: '',
    phoneNumber: ''
  }

  constructor(private router: Router, private authService: AuthService) { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.loading = false;
  }

  onLogin(form: NgForm) {
    this.loading = true;
    if (form.valid) {
      this.user.password = CryptoJS.MD5(this.user.password).toString();
      return this.authService
      .loginUser(this.user)
      .subscribe(
        data => {
          if(data.error != null) {
            this.user.password = '';
            this.loading = false;
          } else {
            this.authService.setUser(data.result);
            this.authService.setToken(data.result.id);
            this.router.navigate(['lines-dashboard']);
            location.reload();
          }
        },
        error => {
          console.log(error);
          this.user.password = '';
          this.loading = false;
        }
      );
    }else{
      this.user.password = '';
      console.log('Form not valid.');
      this.loading = false;
    }
  }

}