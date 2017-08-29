import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './../models/car.model';

@Injectable()
export class CarService {

  public cars = [
    new Car(1, 'Audi', 'A4', '2010', 300, true, 'Euro 5', 5),
    new Car(1, 'Renault', 'Megane', '2014', 240, false, 'Euro 5', 5), 
    new Car(1, 'BMW', 'M3', '2006', 320, true, 'Euro 5', 3), 
    new Car(1, 'Fiat', '500', '1970', 120, false, 'Unknown', 3), 
    
  ];
  
  constructor(){
  }

  getCars(){
    return this.cars;    
  }
  
}
