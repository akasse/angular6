export class User {

  name:string;
  email:string;
  password:string;
  password_confirmation:string;
  at?:string;
  roles: Role[];
  constructor(){
    this.roles = [];
    this.email = '';
    this.name = '';
    this.password = '';
    this.password_confirmation = '';
  }
}

export class ChangePassWord {

  email:string;
  password:string;
  newpassword:string;

  constructor(){
    this.email = '';
    this.password = '';
    this.newpassword = '';
  }
}

export class Role {
  nom:string
  constructor(){
    this.nom = '';
  }
}

export class GetUser {
  name:string;
  email:string;
  at:string;
  error:number;
  message:string;

  constructor(){
    this.email = '';
    this.name = '';
    this.at = '';
    this.error = 1;
    this.message = '';
  }
}
