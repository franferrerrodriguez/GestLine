import { Component, OnInit, ɵConsole } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-lines-dashboard',
  templateUrl: './lines-dashboard.component.html',
  styleUrls: ['./lines-dashboard.component.css']
})
export class LinesDashboardComponent implements OnInit {

  public loading:boolean;
  public data:any;
  public document:string;

  constructor(private authService: AuthService, private contractService: ContractService) { 
    this.loading = true;
  }

  ngOnInit(): void {
    console.log(this.authService.getCurrentUser());
    //this.getClientManagementData(this.document);
  }

  getClientManagementData(document:string) {
    this.loading = true;
    return this.contractService
    .getData(document)
    .subscribe(
      data => {
        console.log(data);
        this.data = data;
        this.loading = false;
      }
    );
  }
  
}