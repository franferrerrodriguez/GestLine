import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user.class';
import { Notification } from '../../../models/Notification.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading: boolean;
  public notification: Notification;
  public loginType :number;

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
    this.loginType = 1;
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
            this.notification = new Notification(Notification.Type().Error, "Ha ocurrido un error inesperado.");
          } else {
            this.authService.setUser(data.result);
            this.authService.setToken(data.result.id);
            this.router.navigate(['lines-dashboard']);
            location.reload();
          }
        },
        error => {
          console.log(error);
          this.notification = new Notification(Notification.Type().Error, "La combinación de usuario y contraseña no son válidos.");
          this.user.password = '';
          this.loading = false;
        }
      );
    } else {
      this.user.password = '';
      this.notification = new Notification(Notification.Type().Error, "El formulario no es válido. Faltan campos obligatorios.");
      this.loading = false;
    }
  }

  setLoginType(loginType:number){
    this.loginType = loginType;
  }

}