import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProfilComponent } from './profil.component';
import { ProfilRoutingModule } from './profil-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  declarations: [ProfilComponent]
})
export class ProfilModule { }
