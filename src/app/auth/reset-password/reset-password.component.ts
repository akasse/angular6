import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ControlSaisi, Messages, PasswordValidation } from '../../utils';
import { ResetPassword } from '../../models';
import {  SnotifyService, SnotifyPosition } from 'ng-snotify';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form_singup: FormGroup;
  loading: boolean = false;
  ctrl: ControlSaisi;
  resetPassword:ResetPassword;
  checkToken:boolean = false;

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private notify: SnotifyService,
    private tokenService:TokenService
  ) {
    console.log('=======reset=====');

    this.resetPassword = new ResetPassword();
    this.tokenService.remove();
    route.queryParams.subscribe(params => {
      let param :string = params['token'];

      if (param && ( param.split('akft').length == 2) ) {
         this.checkToken = true;
         this.resetPassword.email = param.split('akft')[1];
         this.resetPassword.resetToken = param.split('akft')[0];
       console.log('==========Email===========',this.resetPassword.email);
       console.log('==========Token===========',this.resetPassword.resetToken);
      }else{
        this.checkToken = false;
        /* this.notify.error('Token ou adresse email invalide','Erreur',
        {timeout:0, backdrop:0.5, position:SnotifyPosition.centerCenter,
           showProgressBar:false});
 */
        console.log('============Error===========')
      }
     // this.resetPassword.resetToken = params['token'];
     // console.log('token', this.resetPassword.resetToken)
    });
  }

  ngOnInit() {
    this.ctrl = new ControlSaisi();
    this.getForm_singUp();
  }

  getForm_singUp() {
    this.form_singup = this.fb.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
    },
      {
        validator: PasswordValidation.MatchPassword // your validation method
      })
  }

  async onSubmit_singUp() {
    console.log(this.form_singup.value);
    this.resetPassword.password = this.form_singup.value.password;
    this.resetPassword.password_confirmation = this.form_singup.value.confirmPassword;
    this.notify.info('modification en cours...' ,'Mot de passe',{timeout:5000,backdrop:0.5});
    console.log('====User===',this.resetPassword);
    let res = await this.authService.resetPassword(this.resetPassword);
    if (res.error == Messages.SUCCESS) {
    console.log("====Mot de passe modifier====");
    this.form_singup.reset();
    this.notify.clear();
    this.notify.confirm('Voulez vous vous connectez avec votre nouveau mot de passe','Modification Fait', {
      backdrop:0.5,
      titleMaxLength:50,
      bodyMaxLength:200,
      position: SnotifyPosition.centerCenter,
      buttons:[
        {text: 'OUI',
        action: toster =>{
           this.router.navigateByUrl('/page/login'),
           this.notify.remove(toster.id)
          }
      },
      ]
    })
    } else {
      console.log("====Erreur====");
      this.notify.clear();
      this.notify.error('Token ou adresse email invalide','Erreur',{timeout:3000, showProgressBar:false});

    }
  }



  //=======Validation Control de saisi=========
  /**
 * CONTROLE DE SAISIE ajoute D'une classe dans la balise div
 *
 * @param form Nom du formgroup
 *
 * @param name nom du formControl
 */
getClassformgroup(form: FormGroup, name: string) {
  return this.ctrl.getClassformgroup(form, name);
}
/**
   * CONTROLE DE SAISIE ajoute D'une classe dans la balise input
   *
   * @param form Nom du formgroup
   *
   * @param name nom du formControl
   */
getClassInput(form: FormGroup, name: string) {
  this.getErrorInput(form, name);
  return this.ctrl.getClassInput(form, name);
}
/**
 * Controle de saisi d'une balise input de type text
 * @param form Nom du formgroup
   *
   * @param name nom du formControl
 */
getErrorInput(form: FormGroup, name: string) {
  return this.ctrl.getErrorInput(form, name);
}

}
