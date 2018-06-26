import { Injectable } from '@angular/core';
import { Messages, Prefixe, Api } from '../utils';
import { Router } from '@angular/router';

@Injectable()
export class TokenService {
  private iss = {
    login: Prefixe.API_URL+Api.LOGIN,
    signup: Prefixe.API_URL+Api.SINGUP
  };

  constructor(public router:Router) { }

  handle(token:string) {
    this.set(token);
  }

  set(token:string) {
    localStorage.setItem(Api.API_TOKEN, token);
  }
  get() {
    return localStorage.getItem(Api.API_TOKEN);
  }

  remove() {
    localStorage.removeItem(Api.API_TOKEN);
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token:string) {
    const payload = token.split('.')[1];
    if (payload) {
      console.log('ok');
      return this.decode(payload);
    } else {
      console.log('no');
      return null;
    }
  }

  decode(payload:string) {
    console.log('de',payload);
    try {
      let result = atob(payload);
      console.log('========',result);

      let res = JSON.parse(result);
      console.log('====ok bon====');
      return res ;
    } catch (error) {
      console.log('====ok error====',error);
      return null;
    }

   /*  if (res) {
      console.log('====ok bon====');

      return res ;
    } else {
      console.log('===error=p==');

      return null;
    } */
  }

  loggedIn() {
    return this.isValid();
  }

  //========

  getRouter(url:string){
    if (url === '/page/login') {
    this.router.navigateByUrl('/dashboard');
    }
  }
}
