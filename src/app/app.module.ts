import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';


//==============================
import { HomeLayoutComponent } from './layouts/home/home-layout.component';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
//========================Authentification===========================
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BeforeLoginService, AfterLoginService } from './guard';
import { TokenService } from './services/token.service';
import { AuthakService } from './services/authak.service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { ToastDefaults, SnotifyService } from 'ng-snotify';
import { AuthService } from './services/auth.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { VoyageurLayoutComponent } from './layouts/voyageur-layout/voyageur-layout.component';
import { FourniseurLayoutComponent } from './layouts/fourniseur-layout/fourniseur-layout.component';
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    FullLayoutComponent,
    AuthLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    AdminLayoutComponent,
    VoyageurLayoutComponent,
    FourniseurLayoutComponent,
    StaffLayoutComponent,
  ],
  providers: [
    BeforeLoginService,
    AfterLoginService,
    TokenService,
    AuthakService,
    SnotifyService,
    AuthService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
