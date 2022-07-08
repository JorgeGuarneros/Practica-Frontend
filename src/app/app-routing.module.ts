import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./acces/login/login.component";
import {RegisterComponent} from "./acces/register/register.component";
import {RecoverComponent} from "./acces/recover/recover.component";
import {NavBarComponent} from "./home/nav-bar/nav-bar.component";
import {ProductosComponent} from "./galeria/productos/productos.component";
import {UsuarioComponent} from "./galeria/usuario/usuario.component";


const routes: Routes = [{path: 'Login',component:LoginComponent},
  {path: 'Register',component:RegisterComponent},
  {path: 'Recover',component:RecoverComponent},
  {path: 'Navbar',component:NavBarComponent},
  {path: 'Nomina',loadChildren:()=>import('./nomina/nomina.module').then(m=>m.NominaModule)},
  {path: 'Productos',component:ProductosComponent},
  {path: 'Usuario',component:UsuarioComponent},
  {path:'Productos',loadChildren:()=>import('./galeria/galeria.module').then(m=>m.GaleriaModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
