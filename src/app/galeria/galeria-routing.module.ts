import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Prod2Component} from "./prod2/prod2.component";
import {GuardarProductoComponent} from "./guardar-producto/guardar-producto.component";

const routes: Routes = [
  {path:'',children:[{path: 'Guardar',component:GuardarProductoComponent},
  {path:'Prod/:id',component:Prod2Component}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
