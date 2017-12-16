import { Component, OnInit } from '@angular/core';


// Import Services
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:any;
  token:any;


  constructor(private auth:AuthServiceService) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(res => {
      this.token = res;
    });

    this.auth.getUserData(this.token).subscribe(res => {
      this.data = res.user;
    })
  
  }


}
