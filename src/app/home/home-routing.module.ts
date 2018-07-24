import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionVoyageurComponent } from './inscription-voyageur/inscription-voyageur.component';
import { InscriptionFournisseurComponent } from './inscription-fourniseur/inscription-fourniseur.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Accueil'
    },
    children: [
      {
        path: 'accueil',
        component: HomeComponent,
      },
      {
        path: 'authentification',
        component: AuthentificationComponent,
      },
      {
        path: 'inscription-voyageur',
        component: InscriptionVoyageurComponent,
      },
      {
        path: 'inscription-fournisseur',
        component: InscriptionFournisseurComponent,
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
