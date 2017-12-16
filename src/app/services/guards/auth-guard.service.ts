import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AuthServiceService } from '../auth-service.service'
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private auth:AuthServiceService) { }


  canActivate() {
    let token = this.auth.isLoggedIn().subscribe(res => res);
    if(token !== null) {
      return true;
    } else if(token === null){
      this.router.navigate(['/signin']);
      return false;
    }
  }

}
