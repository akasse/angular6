import { Injectable } from '@angular/core';
import { Messages, Prefixe, Api } from '../utils';

@Injectable()
export class TokenService {
  private iss = {
    login: Prefixe.API_URL+Api.LOGIN,
    signup: Prefixe.API_URL+Api.SINGUP
  };

  constructor() { }

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
    return this.decode(payload);
  }

  decode(payload:string) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
