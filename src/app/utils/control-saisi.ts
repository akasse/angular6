import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

export class ControlSaisi {

  public ck: boolean;
  public tab = [];

  constructor() {
  }

  /**
   * la classe de la linge selectionnee
   * @param item ele:ent courrant selectionne
   */

  getActiveClasses(item) {
    if (this.tab[0] === item) {
      return 'bg-primary';
    } else {
      return '';
    }
  }

  getActiveClasses_(item) {
    if (this.tab[0] === item) {
      return 'text-mutedak';
    } else {
      return '';
    }
  }



  getSelect() {
    if (this.tab.length >= 1) {
      return true;
    } else {
      return false;
    }
  }

  getSelectOne() {
    if (this.tab.length == 1) {
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param classId L'element selectionne
   * @param flag le check box true|false
   */
  onChange(classId, flag) {
    this.ck = flag;
    if (flag) {
      this.tab.push(classId);
      if (this.tab.length == 0) {
        this.tab.push(classId);
        this.ck = true;
      }
      else if (this.tab.length == 1) {
        this.ck = true;
      }
      else {
        this.ck = false
      }

    } else {
      this.tab.splice(this.tab.indexOf(classId), 1);
      if (this.tab.length == 0) {
        this.ck = false;
      }
      else if (this.tab.length == 1) {
        this.ck = true;
      }
      else {
        this.ck = false
      }

    }
  }



  /**
* Controle de saisi d'une balise input de type text
* @param form Nom du formgroup
 *
 * @param name nom du formControl
*/
  getErrorInput(form: FormGroup, name: string) {
    if (form.get(name).invalid && (form.get(name).dirty || form.get(name).touched)) {
      if (form.get(name).errors.required) {
        return 'Ce champ ne doit pas être null';
      } else if (form.get(name).errors.minlength) {
        return 'Ce champ ne doit pas avoir au MIN ' + form.get(name).errors.minlength.requiredLength + ' caract';
      } else if (form.get(name).errors.maxlength) {
        return 'Ce champ ne doit pas avoir au MAX ' + form.get(name).errors.maxlength.requiredLength + ' caract';
      }
      else if (form.get(name).errors.MatchPassword) {
        return 'Mot de passe incorrect!';
      }
      else if (form.get(name).errors.pattern.requiredPattern = "^^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$") {
        return 'Email invalide !';
      }
      else {
        return ' ';
      }
    }
    else {
      return ' ';
    }
  }

  /**
 * CONTROLE DE SAISIE ajoute D'une classe dans la balise div
 *
 * @param form Nom du formgroup
 *
 * @param name nom du formControl
 */
  getClassformgroup(form:FormGroup, name:string) {
    if (form.get(name).invalid && form.get(name).dirty) {
      return 'has-danger has-feedback';
    }
    else if (form.get(name).valid && form.get(name).dirty) {
      return 'has-success';
    }
    else {
      return ' ';
    }
  }
  /**
     * CONTROLE DE SAISIE ajoute D'une classe dans la balise input
     *
     * @param form Nom du formgroup
     *
     * @param name nom du formControl
     */
  getClassInput(form:FormGroup, name:string) {
    this.getErrorInput(form, name);
    if (form.get(name).invalid && form.get(name).dirty) {
      return 'form-control-danger';
    }
    else if (form.get(name).valid && form.get(name).dirty) {
      return 'form-control-success';
    }
    else {
      return ' ';
    }
  }

}
