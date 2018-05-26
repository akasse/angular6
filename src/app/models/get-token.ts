export class GetToken {
  access_token:string;
  error:number;
  message:string;
  expires_in:number;
  user:string;

  constructor(){
    this.access_token = '';
    this.error = 1;
    this.message = '';
    this.expires_in = 0;
    this.user = '';
  }

}

