import { Component, OnInit } from '@angular/core';
import { CarService } from './../../shared/services/car-service.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit {
  
  private cars: any[];

;  constructor(private carsService: CarService) {
   }

  ngOnInit() {
    this.cars = this.carsService.getCars();    
  }


}
