import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil.component';


const routes: Routes = [
  {
    path: '',
    component: ProfilComponent,
    data: {
      title: 'Profil'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
