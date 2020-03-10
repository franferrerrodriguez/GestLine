import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private line:string;

  constructor(private router: Router, public authService: AuthService) {
    this.line = "";
  }

  ngOnInit(): void { }
  
  searchLine(search:string){
    this.line = search;
    console.log(this.line);
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

}