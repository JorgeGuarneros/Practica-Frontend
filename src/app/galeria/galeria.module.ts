import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaRoutingModule } from './galeria-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { Prod1Component } from './prod1/prod1.component';
import { Prod2Component } from './prod2/prod2.component';
import { GuardarProductoComponent } from './guardar-producto/guardar-producto.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    ProductosComponent,
    Prod1Component,
    Prod2Component,
    GuardarProductoComponent,
    UsuarioComponent,
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GaleriaModule { }
