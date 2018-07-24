import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVoyagesComponent } from './list-voyages/list-voyages.component';

//==============Module Externe====================
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';
import { RecaptchaModule } from 'ng-recaptcha';
import { ArchwizardModule } from 'ng2-archwizard';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name'
};

@NgModule({
  imports: [
    CommonModule,
     //=================
     //NgxSelectModule,
     NgxSelectModule.forRoot(CustomSelectOptions),
     FormsModule,
     ReactiveFormsModule,
     CarouselModule.forRoot(),
     ModalModule.forRoot(),
     TabsModule.forRoot(),
     BsDatepickerModule.forRoot(),
     LaddaModule,
     ArchwizardModule,
     RecaptchaModule,
     SnotifyModule
   ],
   providers: [
     { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
     SnotifyService],
  declarations: [ListVoyagesComponent],
  exports: [ListVoyagesComponent]
})
export class PartageModule { }
