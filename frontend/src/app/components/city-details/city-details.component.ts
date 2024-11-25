import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnChanges {
  @Input() cityName = '';
  @Output() weatherFetched = new EventEmitter<boolean>();
  weatherData: Weather | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnChanges() {
    this.fetchWeather();
  }

  fetchWeather() {
    if (this.cityName.trim()) {
      this.weatherService.getWeather(this.cityName).subscribe((data) => {
        this.weatherData = {
          ...data,
          temperature: Math.round(data.temperature),
          feels_like: Math.round(data.feels_like)
        };
        this.weatherFetched.emit(true);
      });
    }
  }
}
