import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CityListComponent} from './components/city-list/city-list.component';
import {AddCityComponent} from './components/add-city/add-city.component';
import {CityDetailsComponent} from './components/city-details/city-details.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    AddCityComponent,
    CityDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
