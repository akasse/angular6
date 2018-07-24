import { NgModule, Testability } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//==============================
import { HomeLayoutComponent } from './layouts/home/home-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { VoyageurLayoutComponent } from './layouts/voyageur-layout/voyageur-layout.component';
import { FourniseurLayoutComponent } from './layouts/fourniseur-layout/fourniseur-layout.component';
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },

  //=========================================
  {
    path: '',
    component: HomeLayoutComponent,
    data: {
      title: 'Accueil'
    },
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  },

  //=========================================
/*   {
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
  } */

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
