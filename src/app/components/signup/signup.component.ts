import { Component, OnInit } from '@angular/core';

// Import Service
import { AuthServiceService } from '../../services/auth-service.service'

// Import Routes
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  msg:any;
  success: any;
  constructor(private auth:AuthServiceService,private router:Router) { }

  ngOnInit() {
  }

  submitForm(data) {
    this.auth.register(data.value).subscribe(res => {
      if(res.success === true) {
        this.msg = res.msg + " You Will Redirected to Sign In";
        setTimeout(() => {
          this.router.navigate(['/signin']);
        },2000)
      } else {

        this.msg = res.msg

      }
    })
  }


}
