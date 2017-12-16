import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { NgRedux,select } from '@angular-redux/store';
import { IAppState } from '../store';
@Injectable()
export class AuthServiceService {
  @select() token;

  constructor(private http:Http,private router:Router,private ngRedux:NgRedux<IAppState>) { }

  register(data) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let opts = new RequestOptions({
      headers:headers
    })

    // Return Success Message

    return this.http.post('http://localhost:3000/users/register',data,opts).map(res => res.json());


  }

  login(data) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let opts = new RequestOptions({
      headers:headers
    })


    // Return Token
    return this.http.post('http://localhost:3000/users/auth',data,opts).map(res => res.json());


  }

  storeToken(token) {
    // localStorage.setItem('token',token);
    this.ngRedux.dispatch({
      type: 'ADD_TOKEN',
      token: token
    });

  }
  removeToken() {
    // localStorage.removeItem('token');
    this.ngRedux.dispatch({
      type: 'REMOVE_TOKEN'
    });
    this.router.navigate(['/signin']);
  }


  isLoggedIn() {
    return this.token;
  }

  getUserData(token) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',token);
    let opts = new RequestOptions({
      headers:headers
    })

    return this.http.get('http://localhost:3000/users/profile',opts).map(res => res.json());



  }



}
