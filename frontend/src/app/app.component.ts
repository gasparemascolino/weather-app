import {Component} from '@angular/core';
import {City} from './models/city.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  cityAdded?: City;

  onCityAdded(city: City) {
    this.cityAdded = city
  }

}
