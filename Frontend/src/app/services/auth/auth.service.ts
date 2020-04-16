import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { User } from '../../models/user.class';
import { environment, API } from '../../../environments/environment';

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

  getBlackList(document: string): Observable<any> {
    const url = API.msauthenticationv1 + "getBlackList/" + document;
    return this.http
      .get<Boolean>(
        url,
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

  getToken():string {
    return localStorage.getItem("accessToken");
  }

  setSessionTime(): void {
    localStorage.setItem("sessionTime", new Date()
      .setMinutes(new Date()
      .getMinutes() + environment.sessionTime)
      .toString());
  }

  getSessionTime():number {
    return +localStorage.getItem("sessionTime");
  }

  refreshSessionTime(): void {
    this.checkSessionTime();
    if(this.getSessionTime())
      this.setSessionTime();
  }

  checkSessionTime() {
    if(this.getSessionTime() && new Date().getTime() > this.getSessionTime())
      this.logoutUser();
  }

  getTokenServer(document:string): Observable<any> {
    const url = API.msauthenticationv1 + "getToken/" + document;
    return this.http
      .get<string>(
        url,
        { headers: this.headers }
      )
    .pipe(map(data => data));
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
    localStorage.removeItem("sessionTime");
    window.location.reload();
  }

}