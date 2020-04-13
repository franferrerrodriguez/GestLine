import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

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