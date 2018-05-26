import { NgModule } from '@angular/core';

import { AccueilRoutingModule } from './accueil-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthService } from '../services/auth.service';
import { SnotifyService, ToastDefaults } from 'ng-snotify';
@NgModule({
  imports: [
    AccueilRoutingModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService, AuthService],
  declarations: [ DashboardComponent,ProfilComponent ]
})
export class AccueilModule { }
