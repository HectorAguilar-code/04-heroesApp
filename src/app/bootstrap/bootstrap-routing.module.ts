import { NgModule } from '@angular/core';
import { HomeComponent } from './page/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children:[
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapRoutingModule { }
