import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarFormComponent } from './components/car-form/car-form.component';

import { CarService } from './shared/services/car-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LayoutComponent,
    CarFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule

  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
