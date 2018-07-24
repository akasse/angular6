import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { EvenementComponent } from './evenement/evenement.component';
import { VoyageurComponent } from './voyageur/voyageur.component';
import { FourniseurComponent } from './fourniseur/fourniseur.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, UserComponent, EvenementComponent, VoyageurComponent, FourniseurComponent]
})
export class AdminModule { }
