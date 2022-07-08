import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    ErrorComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccesModule { }
