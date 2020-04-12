import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Utils } from '../../Utils/Utils.class';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class ConsumptionComponent implements OnInit {

  public loading:boolean;
  public contractData:any;
  public document:string;
  public utils:Utils;

  constructor(private authService: AuthService, private contractService: ContractService) { }

  ngOnInit(): void {
    this.loading = false;
    this.utils = new Utils();
    this.document = this.authService.getCurrentUser().document;
    this.getContractByDocument(this.document);
  }

  getContractByDocument(document:string) {
    this.loading = true;
    return this.contractService
    .getContractByDocumentSrv(document)
    .subscribe(
      data => {
        this.loading = false;
        this.contractData = data.result;
        console.log(this.contractData);
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}