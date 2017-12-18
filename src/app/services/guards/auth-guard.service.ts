import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AuthServiceService } from '../auth-service.service'
@Injectable()
export class AuthGuardService implements CanActivate {
  token:any;
  constructor(private router:Router,private auth:AuthServiceService) { }


  canActivate() {
    this.auth.isLoggedIn().subscribe(res => {
      this.token = res;
    });
    if(this.token !== null) {
      return true;
    } else if(this.token === null){
      this.router.navigate(['/signin']);
      return false;
    }
  }

}
