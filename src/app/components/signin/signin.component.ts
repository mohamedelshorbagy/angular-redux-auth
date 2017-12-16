import { Component, OnInit } from '@angular/core';


// Import Service
import { AuthServiceService } from '../../services/auth-service.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 msg:any;
 success:any;


  constructor(private auth:AuthServiceService,private router:Router) { }

  ngOnInit() {
  }


  submitForm(data) {
    this.auth.login(data.value).subscribe(res => {
      if(res.success === true) {
        this.success = res.success;
        setTimeout(() => {
          this.auth.storeToken(res.token);
          this.router.navigate(['/dashboard']);
        },2000)

      } else {

        this.msg = res.msg;
        this.success = res.success;

      }

    })
  }

}
