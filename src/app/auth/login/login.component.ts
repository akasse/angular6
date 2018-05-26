import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Login, User } from '../../models';
import { ControlSaisi, PasswordValidation, Messages } from '../../utils';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthakService } from '../../services/authak.service';
import {  SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form_login: FormGroup;
  form_singup: FormGroup;
  form_email: FormGroup;

  loading: boolean = false;
  error: string = '';
  ctrl: ControlSaisi;

  constructor(
    private fb: FormBuilder, private router: Router,
    private authService: AuthService,
    private authakService: AuthakService,
    private notify: SnotifyService) {
  }

  ngOnInit() {
    this.ctrl = new ControlSaisi();
    this.getForm_email();
    this.getForm_login();
    this.getForm_singUp();
  }

  // les formulaires
  getForm_login() {
    this.form_login = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  }

  async onSubmit_login() {
    console.log(this.form_login.value);
    let login = new Login();
    this.loading = true;
    login.email = this.form_login.value.email;
    login.password = this.form_login.value.password;
    console.log('====Login===', login);

    login.email = 'akasse005@gmail.com';
    login.password = 'touba1';

    let res = await this.authService.login(login);
    console.log(res);
    if (res.error == Messages.SUCCESS) {
      this.loading = false;
      console.log("====Connecter====");
      this.handleResponse(res.access_token);
    } else {
      this.loading = false;
      console.log("====Erreur====");
      this.error = 'Adresse email ou mot de passe incorrect';
    }
  }

  handleResponse(token: string) {
   // this.tokenService.handle(token);
    this.authakService.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error) {
    // this.error = error.error.error;
  }


  getForm_singUp() {
    this.form_singup = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])),
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

  async onSubmit_singUp(modal: ModalDirective) {
    console.log(modal);
    console.log(this.form_singup.value);
    this.notify.info('Envoie en cours...' ,'Inscription',{timeout:5000,backdrop:0.5});
    let user = new User();
    user.email = this.form_singup.value.email;
    user.name = this.form_singup.value.name;
    user.password = this.form_singup.value.password;
    user.password_confirmation = this.form_singup.value.confirmPassword;
    modal.hide();
    console.log('====User===', user);
    let res = await this.authService.singup(user);
    if (res.error == Messages.SUCCESS) {
      this.notify.clear();
      this.notify.success('Réussi', 'Inscription',{timeout:3000, showProgressBar:false});
      console.log("====Creer====");
    } else {
      this.notify.clear();
      this.notify.error('Vérifier votre adress email ou votre connection','Erreur',{timeout:3000, showProgressBar:false});
      console.log("====Erreur====");
    }
  }

  getForm_email() {
    this.form_email = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  async onSubmit_email(modal: ModalDirective) {
    console.log(modal);
    console.log(this.form_email.value);
    this.notify.info('Envoie en cours...' ,'Adresse email',{timeout:5000,backdrop:0.5});
    let res = await this.authService.sendPasswordLink(this.form_email.value.email);
    if (res.error == Messages.SUCCESS) {
      this.notify.clear();
      this.notify.success('Vérifiez votre boite email', 'Adresse email',{timeout:3000, showProgressBar:false});
      console.log("==== SEND EMAL====");
    } else {
      console.log("====Erreur====");
     this.notify.clear();
      this.notify.error(res.message,'Erreur',{timeout:3000, showProgressBar:false});
    }
    this.form_email.reset();
    modal.hide();
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
