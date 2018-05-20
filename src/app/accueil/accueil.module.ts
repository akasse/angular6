import { NgModule } from '@angular/core';

import { AccueilRoutingModule } from './accueil-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  imports: [
    AccueilRoutingModule,
  ],
  declarations: [ DashboardComponent,ProfilComponent ]
})
export class AccueilModule { }
