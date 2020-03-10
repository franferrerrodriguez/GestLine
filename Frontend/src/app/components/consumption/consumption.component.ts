import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class ConsumptionComponent implements OnInit {

  public loading:boolean;

  constructor() {
    this.loading = true;
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

}
