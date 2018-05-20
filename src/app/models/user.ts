export class User {
  name:string;
  email:string;
  password:string;
  password_confirmation:string;

  constructor(){
    this.email = '';
    this.name = '';
    this.password = '';
    this.password_confirmation = '';
  }
}
