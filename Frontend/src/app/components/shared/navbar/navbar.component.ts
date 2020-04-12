import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { SearchService } from '../../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService, private searchService:SearchService) { }

  ngOnInit(): void { }
  
  searchLine(phone:string){
    this.searchService.searchPhone(phone);
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

}