import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Utils } from 'src/app/Utils/Utils.class';

@Component({
  selector: 'app-chart-invoices',
  templateUrl: './chart-invoices.component.html',
  styleUrls: ['./chart-invoices.component.css']
})
export class ChartInvoicesComponent implements OnInit {

  public loading:boolean;
  public invoiceData:any;
  public document:string;

  public chartType: string = 'bar';
  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  ];
  public monthLabel: Array<String>;

  constructor(private authService: AuthService, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.loading = false;
    this.document = this.authService.getCurrentUser().document;
    this.getInvoiceByDocument(this.document, "2019-01-01", "2020-12-01");
  }

  getInvoiceByDocument(document:string, startDate:string, endDate:string) {
    this.loading = true;
    return this.invoiceService
    .getInvoiceByDocumentSrv(document, startDate, endDate)
    .subscribe(
      data => {
        this.invoiceData = data.result;
        this.loading = false;
        this.setArrayMonths(this.invoiceData);
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  private setArrayMonths(data:any){
    var utils = new Utils();
    var monthLabel:Array<String> = new Array();

    data.forEach(function (value) {
      let newDate = new Date(value.invoiceDate);
      monthLabel.push(utils.getMonthByNumber(newDate.getMonth() + 1));
    });

    this.monthLabel = monthLabel;
  }

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}