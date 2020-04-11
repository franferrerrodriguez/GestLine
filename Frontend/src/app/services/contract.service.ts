import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  getContractByDocumentSrv(document: string): Observable<any> {
    const url = API.mscontractv1 + "document/" + document;
    return this.http
      .get(
        url,
        { headers: this.headers }
      )
    .pipe(map(data => data));
  }

  modifyContracts(contracts: string[]): Observable<any> {
    const url = API.mscontractv1 + "modifyContracts";
    return this.http
      .post<String>(
        url,
        contracts,
        { headers: this.headers }
      )
    .pipe(map(data => data));
  }

}