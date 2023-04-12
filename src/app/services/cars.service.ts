import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private _http: HttpClient) {}

  getAllCars(): Observable<any> {
    return this._http.get('http://localhost:3000/cars');
  }
}
