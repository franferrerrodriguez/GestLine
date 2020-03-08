import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public chartType: string = 'doughnut';

  public chartLabels: Array<any> = ['1.2 GB consumidos', '18.8 GB sin consumir'];

  public legend: boolean;

  public chartDatasets: Array<any> = [
    { data: [20, 80] }
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['green', 'grey'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}