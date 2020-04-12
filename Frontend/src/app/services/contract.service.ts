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

  getContractsByPhone(contract:any, phone:string = null){
    let contractsReturn = new Array();
    contract.contractLines.forEach(function (param) {
      if(phone && param.phone == phone)
      contractsReturn.push(param);
      else if(!phone)
      contractsReturn.push(param);
    });
    return contractsReturn;
  }

}