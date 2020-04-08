import { Component, OnInit, ɵConsole } from '@angular/core';

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
    this.loading = false;
  }
  
}