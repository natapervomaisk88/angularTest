import { Component, Input } from '@angular/core';
import { ICar } from 'src/app/models/ICar';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  @Input('item') car: ICar;
  fontSize: string = '20px';
  printMessage(): void {
    document.body.style.background = 'yellow';
  }
}
