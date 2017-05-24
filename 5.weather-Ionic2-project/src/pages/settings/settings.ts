import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherPage } from '../weather/weather'
import { WeatherService } from '../../app/services/weather.service'

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
              private weatherService: WeatherService) {}

  defaultCity;
  results;
  search;

  ngOnInit() {
    this.getDefaultCity();
  }

  getDefaultCity() {
    if(localStorage.city) {
      this.defaultCity = JSON.parse(localStorage.city).name 
      return
    }
    this.defaultCity = '';
  }

  getQuery() {
    this.weatherService.searchCities(this.search).subscribe(
      res => this.results = res.RESULTS
    )
  }

  setDefaultCity(city) {
    this.results = [];

    localStorage.city = JSON.stringify(city);
    this.search = city.name;
    this.getDefaultCity()
  }

  saveChanges() {
    this.navCtrl.setRoot(WeatherPage)
  }

}
