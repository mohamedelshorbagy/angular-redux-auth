import { Component, OnInit } from '@angular/core';

// Import Services
import { AuthServiceService } from '../../services/auth-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token:any;

  constructor(private auth:AuthServiceService) { }

  ngOnInit() {

  }


  logout() {
    this.auth.removeToken();
  }

}
