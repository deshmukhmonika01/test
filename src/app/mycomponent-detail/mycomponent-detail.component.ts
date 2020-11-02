import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-mycomponent-detail',
  templateUrl: './mycomponent-detail.component.html',
  styleUrls: ['./mycomponent-detail.component.css']
})
export class MycomponentDetailComponent implements OnInit {
  @Input() city: City;

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

    ngOnInit():void {
      this.getCity();
      
    }
    getCity(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.cityService.getCity(id)
        .subscribe(city => this.city = city);
    
    }
    goBack(): void {
      this.location.back();
    }
  }
