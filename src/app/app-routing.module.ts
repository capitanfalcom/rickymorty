import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PorEspecieComponent } from './pages/personaje/por-especie/por-especie.component';
import { PorNombreComponent } from './pages/personaje/por-nombre/por-nombre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'nombre',
    component: PorNombreComponent,
  },
  {
    path: 'especie',
    component: PorEspecieComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: 'home',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
