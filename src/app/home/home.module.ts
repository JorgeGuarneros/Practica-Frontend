import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    NavBarComponent,
    ProfileComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
