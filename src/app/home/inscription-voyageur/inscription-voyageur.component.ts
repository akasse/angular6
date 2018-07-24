import { Component, OnInit } from '@angular/core';
import { ControlSaisi, PasswordValidation } from '../../utils';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SnotifyService } from 'ng-snotify';
import { Router } from '@angular/router';
import { Utilisateur, ConditionUse } from '../../models';

@Component({
  selector: 'app-inscription-voyageur',
  templateUrl: './inscription-voyageur.component.html',
  styleUrls: ['./inscription-voyageur.component.scss']
})
export class InscriptionVoyageurComponent implements OnInit {

  form_voyageur: FormGroup;
  ctrl: ControlSaisi;
  loading: boolean = false;
  cond:ConditionUse[];
  validation:boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.ctrl = new ControlSaisi();
    this.condition();
    this.addFormVoyageur();
  }



  condition() {
    this.cond = [
      {
        id: 0,
        val: false,
        text:'je n\'accepte pas les conditions'
      },
      {
        id: 1,
        val: true,
        text:'j\'accepte les conditions'
      }
    ]
  }

  onChangeCondition(c:ConditionUse){
    this.validation = false;
    if (c.val && this.form_voyageur.valid) {
      this.validation = true;
    }
  }

  addFormVoyageur() {
    this.form_voyageur = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])),
      firstname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])),
      number: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cond: new FormControl('', Validators.compose([
        Validators.required
      ])),
      recaptchaReactive: new FormControl('', Validators.compose([
        Validators.required
      ]))
    },
      {
        validator: PasswordValidation.MatchPassword // your validation method
      })
  }

  onSubmitVoyageur() {
    console.log(this.form_voyageur.value);

    let user = new Utilisateur();
    user.email = this.form_voyageur.value.email;
    user.firstname = this.form_voyageur.value.firstname;
    user.lastname = this.form_voyageur.value.lastname;
    user.number = this.form_voyageur.value.number;
    user.password = this.form_voyageur.value.password;

    console.log(user);


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

