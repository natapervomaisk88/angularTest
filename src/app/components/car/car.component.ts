import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  private title: string = 'List of cars';
  private cars = ['audi', 'opel', 'mazda'];
  public get Title() {
    return this.title;
  }
  public get Cars() {
    return this.cars;
  }
}
