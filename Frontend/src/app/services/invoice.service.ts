import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  getInvoiceByDocumentSrv(document: string, startDate:string, endDate:string): Observable<any> {
    const url = API.msinvoicev1 + "betweenDates/" + document + "/" + startDate + "/" + endDate;
    return this.http
      .get(
        url,
        { headers: this.headers }
      )
    .pipe(map(data => data));
  }

}