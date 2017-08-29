import { Component, OnInit } from '@angular/core';
import { CarService } from './../../shared/services/car-service.service';
import { Car } from './../../shared/models/car.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html'
})
export class CarFormComponent implements OnInit {

  private car: Car;
  private carYears: any[];
  private newCar: Car = new Car();

  constructor(private carsService: CarService) {
    this.carYears = this.carsService.carYear();
   }

  ngOnInit() {
  }

  addCar(newCar){
    let newCarCopy = Object.assign({}, newCar);
    console.log(this.newCar);
    this.carsService.addCar(newCarCopy);
  }
  preview(newCar){
    alert("Mark: " + newCar.mark + "\n" + 
          "Model: " + newCar.model + "\n" +
          "Year: " + newCar.year + "\n" +
          "Max Speed: " + newCar.maxSpeed + "\n" +
          "Is Automatic: " + newCar.isAutomatis + "\n" +
          "Engine: " + newCar.engine + "\n" +
          "Number Of Doors	: " + newCar.numberOfDoors + "\n"
  );
  }
}
