import { Component } from '@angular/core';
import { ICar } from 'src/app/models/ICar';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent {
  cars: ICar[];
  car: ICar = {
    model: '',
    price: 0,
    year: 1990,
  };
  constructor(private _carService: CarsService) {}
  addCar(data: any): void {
    console.log(data);
    this._carService.addCar(data).subscribe({
      next: (response) => {
        alert(`Add car. Id: ${response.id}`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
