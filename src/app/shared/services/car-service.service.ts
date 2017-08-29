import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './../models/car.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class CarService {

  private newCar: Car;

  public cars = [
    new Car(1, 'Audi', 'A4', '2010', 300, true, 'Diesel', 5),
    new Car(1, 'Renault', 'Megane', '2014', 240, false, 'Petrol', 5), 
    new Car(1, 'BMW', 'M3', '2006', 320, true, 'Hybrid', 3), 
    new Car(1, 'Fiat', '500', '1970', 120, false, 'Petrol', 3)
  ];
  
  constructor(private routers: Router){
  }

  getCars(){
    return this.cars;    
  }
  
  carYear(){

  let carYears: any[] = [];
  
    for(let i = 1990; i <= 2017; i++ ){
      carYears.push(i);
    }
    return carYears;
  }
  
  addCar(newCar){
    console.log(newCar);
    this.cars.push(newCar);
    this.routers.navigate(['/cars']); 
  }
}
