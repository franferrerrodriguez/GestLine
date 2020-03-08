import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private line:string;
  public notifications:number;

  constructor(private router: Router, public authService: AuthService) {
    this.line = "";
    this.notifications = 1;
  }

  ngOnInit(): void {
  }
  
  searchLine(search:string){
    this.line = search;
    console.log(this.line);
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

}