import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeRoutingModule } from './home-routing.module';

//==============Module Externe====================
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {NgxMaskModule} from 'ngx-mask'
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ArchwizardModule } from 'ng2-archwizard';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PartageModule } from '../partage/partage.module';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoadingModule } from 'ngx-loading';
import { InscriptionVoyageurComponent } from './inscription-voyageur/inscription-voyageur.component';
import { InscriptionFournisseurComponent } from './inscription-fourniseur/inscription-fourniseur.component';

import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name'
};


import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    //===========
    PartageModule,
    LoadingModule,
    //=================
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    NgxSelectModule.forRoot(CustomSelectOptions),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot(),
    ButtonsModule.forRoot(),
    LaddaModule,
    ArchwizardModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  declarations: [HomeComponent,InscriptionComponent, AuthentificationComponent,
     InscriptionVoyageurComponent, InscriptionFournisseurComponent]
})
export class HomeModule { }
