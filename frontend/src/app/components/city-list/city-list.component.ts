import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit, OnChanges {
  cities: City[] = [];
  @Input() cityAdded?: City;

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.loadCities();
  }

  ngOnChanges() {
    if (this.cityAdded) {
      this.addCity(this.cityAdded);
    }
  }

  loadCities() {
    const storedCities = localStorage.getItem('cities');
    if (storedCities) {
      this.cities = JSON.parse(storedCities);
    } else {
      this.cityService.getCities().subscribe((data) => {
        this.cities = data;
        localStorage.setItem('cities', JSON.stringify(this.cities));
      });
    }
  }

  addCity(city: City) {
    this.cities.push(city);
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  deleteCity(id: number) {
    this.cityService.deleteCity(id).subscribe((data) => {
      this.cities = this.cities.filter(city => city.id !== id);
      localStorage.setItem('cities', JSON.stringify(this.cities));
    });
  }
}
