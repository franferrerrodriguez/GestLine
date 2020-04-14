import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { User } from '../../models/user.class';
import { API } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  loginUser(user: User): Observable<any> {
    const url = API.msauthenticationv1 + "checkLogin";
    return this.http
      .post<User>(
        url,
        user,
        { headers: this.headers }
      )
    .pipe(map(data => data));
  }

  updateUser(user: User): Observable<any> {
    const url = API.msauthenticationv1 + "updateUser";
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
    localStorage.getItem("accessToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    window.location.reload();
  }

}