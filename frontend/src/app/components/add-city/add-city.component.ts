import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import citiesData from '../../../../resources/cities.json';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';

type CitiesData = {
  [cities: string]: string[];
};

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss'],
})
export class AddCityComponent implements OnInit {
  cities: CitiesData = citiesData;
  filteredCities: string[] = [];
  searchTerm: string = '';
  selectedCity = '';
  isInputActive: boolean = false;
  @Output() cityAdded = new EventEmitter<City>();

  constructor(protected cityService: CityService) {}

  ngOnInit() {
    this.filteredCities = this.getAllCities();
  }

  getAllCities(): string[] {
    return Object.values(this.cities).flat();
  }

  filterCities() {
    const allCities = this.getAllCities();
    this.filteredCities = allCities.filter(city =>
      city.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.searchTerm = city;
    this.isInputActive = false;
  }

  addCity() {
    if (this.selectedCity.trim()) {
      this.cityService.addCity(this.selectedCity).subscribe((data) => {
        this.cityAdded.emit(data);
        this.selectedCity = '';
        this.searchTerm = '';
        this.filteredCities = this.getAllCities();
      });
    }
  }

  onFocus() {
    this.isInputActive = true;
  }

  onBlur() {
    setTimeout(() => {
      this.isInputActive = false;
    }, 200);
  }
}
