import { Injectable } from '@angular/core';
import { City } from './city';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CityService {
  
  constructor(private http: HttpClient) { }
  private_url:string ="/assets/data/city.json";

  getCities(): Observable<City[]> {
    return this.http.get<City[]> (this.private_url);
  }
  getCity(id: number): Observable<City> {
    
    return of(CITIES.find(city => city.id === id));
  }
}
