export class ResetPassword {
  email:string;
  password:string;
  password_confirmation:string;
  resetToken:string;

  constructor(){
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
    this.resetToken = '';
  }
}
