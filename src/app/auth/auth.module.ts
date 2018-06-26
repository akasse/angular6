import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { p404Component } from './404/404.component';
import { p500Component } from './500/500.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthakService } from '../services/authak.service';
import { TokenService } from '../services/token.service';
import { LaddaModule } from 'angular2-ladda';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ModalModule.forRoot(),
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    LaddaModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService, AuthakService, AuthService, TokenService],
  declarations: [LoginComponent,
    p404Component,
    p500Component,
   ResetPasswordComponent]
})
export class AuthModule { }
