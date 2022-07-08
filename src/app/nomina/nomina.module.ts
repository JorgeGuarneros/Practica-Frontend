import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominaRoutingModule } from './nomina-routing.module';
import { MenunominaComponent } from './menunomina/menunomina.component';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';


@NgModule({
  declarations: [
    MenunominaComponent,
    DocentesComponent,
    AdministrativosComponent
  ],
  imports: [
    CommonModule,
    NominaRoutingModule
  ]
})
export class NominaModule { }
