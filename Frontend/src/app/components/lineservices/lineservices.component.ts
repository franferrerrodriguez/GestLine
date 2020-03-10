import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineservices',
  templateUrl: './lineservices.component.html',
  styleUrls: ['./lineservices.component.css']
})
export class LineservicesComponent implements OnInit {

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
