import { Component, OnInit } from '@angular/core';

import { ControlSaisi, PasswordValidation } from '../../utils';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SnotifyService } from 'ng-snotify';
import { Router } from '@angular/router';
import { Utilisateur, ConditionUse } from '../../models';

@Component({
  selector: 'app-inscription-fourniseur',
  templateUrl: './inscription-fourniseur.component.html',
  styleUrls: ['./inscription-fourniseur.component.scss']
})
export class InscriptionFournisseurComponent implements OnInit {

  form_fournisseur: FormGroup;
  form_condition: FormGroup;
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
    this.addFormFournisseur();
    this.addForm_Condition();
  }

  addFormFournisseur() {
    this.form_fournisseur = this.fb.group({
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
        Validators.minLength(12),
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
    },
      {
        validator: PasswordValidation.MatchPassword // your validation method
      })
  }

  addForm_Condition() {
    this.form_condition = new FormGroup({
      cond: new FormControl('', Validators.compose([
        Validators.required
      ])),
      recaptchaReactive: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  onSubmitFournisseur() {
    console.log(this.form_fournisseur.value);

    let user = new Utilisateur();
    user.email = this.form_fournisseur.value.email;
    user.firstname = this.form_fournisseur.value.firstname;
    user.lastname = this.form_fournisseur.value.lastname;
    user.number = this.form_fournisseur.value.number;
    user.password = this.form_fournisseur.value.password;

    console.log(user);


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
    if (c.val && this.form_condition.valid) {
      this.validation = true;
    }
  }


  onSubmitValidation(){
    console.log(this.form_fournisseur.value);

    console.log(this.form_condition.value);

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


