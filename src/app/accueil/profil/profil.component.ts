import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ControlSaisi, PasswordValidation, Messages } from '../../utils';
import { AuthService } from '../../services/auth.service';
import { User, GetData, ChangePassWord } from '../../models';
import { SnotifyService } from 'ng-snotify';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user : User;
  form_singup: FormGroup;
  ctrl: ControlSaisi;

  constructor(
    private authService: AuthService,
    private notify: SnotifyService
  ) { }


  ngOnInit() {
    this.ctrl = new ControlSaisi();
    this.user = new User();
    this.getProfile();
    this.getForm_singUp();
  }

  getForm_singUp() {
    this.form_singup = new FormGroup({
      oldpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])),
      newpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ]))
    })
  }



  async onSubmitChangePassword(modal: ModalDirective) {
    console.log(modal);
    console.log(this.form_singup.value);
    this.notify.info('Envoie en cours...' ,{timeout:5000,backdrop:0.5});
    let passwrd = new ChangePassWord();
    passwrd.email = this.user.email
    passwrd.password = this.form_singup.value.oldpassword;
    passwrd.newpassword = this.form_singup.value.newpassword;
    modal.hide();
    this.form_singup.reset();
    let res = await this.authService.changePassword(passwrd);
    console.log(res);
    this.notify.clear();
    if (res.error == Messages.SUCCESS) {
      // this.notify.clear();
      this.notify.success('Mot de passe changé avec succé', 'Succé',{timeout:3000, showProgressBar:false});
      console.log("====Creer====");
    } else {
    //  this.notify.clear();
      this.notify.error('Vérifier votre adress email ou votre connection','Erreur',{timeout:3000, showProgressBar:false});
       console.log("====Erreur====");
    }
  }

  async getProfile(){
    let res = await this.authService.profile();
     if (res.error == 0) {
      this.user = res.data;
      console.log("==Profil==",this.user);

    } else {
      console.log("verifiez votre connection");

    }
    console.log(res)
  }


  //La boite de dialogue
  openmodal(modal: ModalDirective): void {
    console.log(modal);
    modal.config.ignoreBackdropClick = true;
    modal.show();
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
