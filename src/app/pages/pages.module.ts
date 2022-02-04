import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorNombreComponent } from './personaje/por-nombre/por-nombre.component';
import { PorEspecieComponent } from './personaje/por-especie/por-especie.component';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorNombreComponent,
    PorEspecieComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    PorNombreComponent,
    PorEspecieComponent
  ]
})
export class PagesModule { }
