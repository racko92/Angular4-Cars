import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Car } from './models/car.model';
import { CarService } from './services/car-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CarService
  ],
  declarations: []
})
export class SharedModule { }
