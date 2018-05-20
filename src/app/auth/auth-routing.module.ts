import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { p404Component } from './404/404.component';
import { p500Component } from './500/500.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentification'
    },
    children: [
      {
        path: '404',
        component: p404Component,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: '500',
        component: p500Component,
        data: {
          title: 'Page 500'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      },
      {
        path: 'response-password-reset',
        component: ResetPasswordComponent,
        data: {
          title: 'Mot de passe oublie'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
