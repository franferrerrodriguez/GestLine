import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Utils } from 'src/app/Utils/Utils.class';

@Component({
  selector: 'app-resume-invoice',
  templateUrl: './resume-invoice.component.html',
  styleUrls: ['./resume-invoice.component.css']
})
export class ResumeInvoiceComponent implements OnInit {

  public title:string;
  public loading:boolean;
  public invoiceResumeData:any;
  public document:string;
  public numInvoices:number;
  public error:any;
  @Input() chartSelected: any;

  constructor(private authService: AuthService, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.loading = false;
    this.title = "Últimas 6 facturas";
    this.numInvoices = 6;
    this.document = this.authService.getCurrentUser().document;
    this.getInvoiceByDocument();
  }

  getInvoiceByDocument() {
    this.loading = true;
    if(this.document && this.numInvoices){
      return this.invoiceService
      .getInvoiceByDocumentSrv(this.document, this.numInvoices)
      .subscribe(
        data => {
          this.invoiceResumeData = data.result;
          this.loading = false;
          console.log(this.invoiceResumeData);
        },
        error => {
          console.log(error);
          this.loading = false;
          this.error = "";
        }
      );
    }else{
      this.error = "";
    }
  }

}