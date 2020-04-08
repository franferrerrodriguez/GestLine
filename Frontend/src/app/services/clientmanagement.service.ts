import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientmanagementService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  getData(document:string): Observable<any> {
    const url = API.msclientmanagementv1 + "document/" + document;
    return this.http
      .get(
        url,
        { headers: this.headers }
      )
    .pipe(map(data => data));
  }

}