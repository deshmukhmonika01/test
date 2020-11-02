
import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import{CITIES} from '../mock-cities'

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  selectedCity: City;
  cities : City[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }

  
  getCities(): void {
    this.cityService.getCities()
        .subscribe(cities => this.cities = cities);
  }
}