import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private apiUrl = `${environment.apiUrl}/cities`;

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.apiUrl);
  }

  addCity(cityName: string): Observable<City> {
    return this.http.post<City>(this.apiUrl, { "name": cityName });
  }

  deleteCity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
