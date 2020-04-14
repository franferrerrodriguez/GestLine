import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

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
    this.authService.checkSessionTime();
  }

  @HostListener('document:click',['$event'])
  documentClick(event: MouseEvent) {
    this.authService.refreshSessionTime();
  }

  changeRoute() {
    this.authService.refreshSessionTime();
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