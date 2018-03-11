import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },
  {
    path: 'video/:ref',
    component: VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
