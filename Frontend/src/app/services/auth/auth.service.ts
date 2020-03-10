import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { User } from '../../models/user.class';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protocol:string = "http";
  ip:string = "localhost";
  port:string = "3000";

  constructor(private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  registerUser(name: string, email: string, password: string) {
    const url = "http://localhost:3000/api/Users";
    return this.http
      .post<User>(
        url,
        {
          name: name,
          email: email,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  loginUser(user: User): Observable<any> {
    const url = "http://localhost:9061/ms-authentication/check";
    return this.http
      .post<User>(
        url,
        user,
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user: User): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): User {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: User = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }

}