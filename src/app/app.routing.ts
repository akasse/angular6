import { NgModule, Testability } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { BeforeLoginService, AfterLoginService } from './guard';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'page/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AfterLoginService],
    data: {
      title: 'Accueil'
    },
    children: [
      {
        path: '',
        loadChildren: './accueil/accueil.module#AccueilModule'
      }
    ]
  },
  {
    path: 'page',
    component: AuthLayoutComponent,
    canActivate: [BeforeLoginService],
    data: {
      title: 'page'
    },
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule',
      }
    ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
