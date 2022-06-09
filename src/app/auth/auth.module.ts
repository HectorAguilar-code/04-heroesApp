import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AgregarComponent,
    HeroeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
