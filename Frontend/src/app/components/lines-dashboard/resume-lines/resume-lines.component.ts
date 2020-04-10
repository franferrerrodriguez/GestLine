import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ContractService } from '../../../services/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-lines',
  templateUrl: './resume-lines.component.html',
  styleUrls: ['./resume-lines.component.css']
})
export class ResumeLinesComponent implements OnInit {

  public title:string;
  public loading:boolean;
  public contractData:any;
  public document:string;

  constructor(private router: Router, private authService: AuthService, private contractService: ContractService) { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.loading = false;
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
        this.title = "Líneas (" + this.contractData.contractName + ")";
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  byteToGb(param:number){
    return param / 1024 / 1024 / 1024;
  }

  selectedLine(line:any){
    this.router.navigate(['/lineservices', line]);
  }

}