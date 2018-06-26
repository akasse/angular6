import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Messages, Prefixe, Api } from '../utils';
import { Login, User, GetToken, ResetPassword, GetData, ChangePassWord } from '../models/index';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient, private tokenService:TokenService ) { }


  async login(login:Login){
    let res = await  this.http.post(Prefixe.API_URL+Api.LOGIN,login)
    .toPromise()
    .then((data:GetToken)  => {
      console.log(data);
      let result : GetToken = data;
      this.tokenService.handle(result.access_token);
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

  async profile() {
    let res = await  this.http.post(Prefixe.API_URL+Api.PROFILE,
      null, this.getHeader())
    .toPromise()
    .then((data : GetData<User>) => {
      return data;
    })
    .catch(err => {
      let result : GetData<User> = err;
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

  async changePassword(changePassWord:ChangePassWord) {
    let res = await  this.http.post(Prefixe.API_URL+Api.CHANGE_PASSWORD,changePassWord,this.getHeader())
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

  getHeader(){
    let headers =  new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + this.tokenService.get()
      }
    );
    return { headers };
  }

  logout(){
    this.tokenService.remove();
  }


}
