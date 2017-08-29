import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './components/cars/cars.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo:'/cars',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    component: CarsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
  ,
  declarations: []
})
export class AppRoutingModule { }
