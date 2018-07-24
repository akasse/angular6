import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthService } from '../services/auth.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ngfModule } from "angular-file"
import { SimpleDemoComponent } from './file-upload/simple-demo.component';

@NgModule({
  imports: [
    NgxChartsModule,
    CommonModule,
    AccueilRoutingModule,
    ModalModule.forRoot(),
    FormsModule,ReactiveFormsModule,
    SnotifyModule,
    ngfModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService, AuthService],
  declarations: [ DashboardComponent,ProfilComponent, SimpleDemoComponent ]
})
export class AccueilModule { }
