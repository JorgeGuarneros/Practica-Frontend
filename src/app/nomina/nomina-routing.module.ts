import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenunominaComponent} from "./menunomina/menunomina.component";
import {DocentesComponent} from "./docentes/docentes.component";
import {AdministrativosComponent} from "./administrativos/administrativos.component";

const routes: Routes = [{path:'',children:[{path:'Menunomina',component:MenunominaComponent},
    {path:'Docentes',component:DocentesComponent},
    {path:'Administrativos',component:AdministrativosComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
