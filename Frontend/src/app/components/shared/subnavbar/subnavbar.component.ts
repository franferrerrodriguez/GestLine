import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ClientmanagementService } from '../../../services/clientmanagement.service';

@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.css']
})
export class SubnavbarComponent implements OnInit {

  public data:any;

  constructor(public authService: AuthService, private clientmanagementService: ClientmanagementService) { 

  }

  ngOnInit(): void {
    this.getClientManagementData();
  }

  getClientManagementData() {
    if(this.authService.getCurrentUser()){
      return this.clientmanagementService
      .getData(this.authService.getCurrentUser().document)
      .subscribe(
        data => {
          this.data = data.result;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}