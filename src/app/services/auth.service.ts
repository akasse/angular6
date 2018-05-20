import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Messages, Prefixe, Api } from '../utils';
import { Login, User, GetToken, ResetPassword } from '../models/index';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }


  async login(login:Login){
    let res = await  this.http.post(Prefixe.API_URL+Api.LOGIN,login)
    .toPromise()
    .then((data:GetToken)  => {
      console.log(data);
      let result : GetToken = data;
      return result;
    })
    .catch(err => {
      let result : GetToken = err;
      return result;
    })
    return res;
  }


  async singup(user:User) {
    let res = await  this.http.post(Prefixe.API_URL+Api.SINGUP,user)
    .toPromise()
    .then((data:GetToken) => {
      console.log(data);
      let result : GetToken = data;
      return result;
    })
    .catch(err => {
      let result : GetToken = err;
      return result;
    })
    return res;
  }

  async sendPasswordLink(email:string) {
    let res = await  this.http.post(Prefixe.API_URL+Api.SEND_PASSWORD_RESET_LINK,{email:email})
    .toPromise()
    .then((data:GetToken) => {
      console.log(data);
      let result : GetToken = data;
      return result;
    })
    .catch(err => {
      let result : GetToken = err;
      return result;
    })
    return res;
  }

  async resetPassword(resetPassword:ResetPassword) {
    let res = await  this.http.post(Prefixe.API_URL+Api.RESET_PASSWORD,resetPassword)
    .toPromise()
    .then((data:GetToken) => {
      console.log(data);
      let result : GetToken = data;
      return result;
    })
    .catch(err => {
      let result : GetToken = err;
      return result;
    })
    return res;
  }


}
