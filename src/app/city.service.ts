import { Injectable } from '@angular/core';
import { City } from './city';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  
  constructor() { }
  
  getCities(): Observable<City[]> {
    return of (CITIES);
  }
  getCity(id: number): Observable<City> {
    
    return of(CITIES.find(city => city.id === id));
  }
}
