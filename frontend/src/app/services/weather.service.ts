import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = `${environment.apiUrl}/weather`;

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<Weather> {
    return this.http.get<Weather>(`${this.apiUrl}/${cityName}`);
  }
}
