import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { User } from './models/user.class';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'GestLine';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.validateToken();
  }

  changeRoute(){
    console.log("Change route!");
  }

  validateToken():any {
    if(this.authService.getCurrentUser()) {
      return this.authService
      .getTokenServer(this.authService.getCurrentUser().document)
      .subscribe(
        data => {
          if(this.authService.getToken() != data.result)
            this.authService.logoutUser();
        },
        error => {
          console.log(error);
          this.authService.logoutUser();
        }
      );
    }
  }
  
}