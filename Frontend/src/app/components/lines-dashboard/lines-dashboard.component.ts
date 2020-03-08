import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lines-dashboard',
  templateUrl: './lines-dashboard.component.html',
  styleUrls: ['./lines-dashboard.component.css']
})
export class LinesDashboardComponent implements OnInit {

  public loading:boolean;

  constructor() { 
    this.loading = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}