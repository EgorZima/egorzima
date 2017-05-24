import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherService } from '../../app/services/weather.service'

@Component({ 
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  constructor(public navCtrl: NavController,
              private weatherService: WeatherService) {}
  
  zmw;
  weather;
  search;
  results;

  
  ngOnInit() {
    this.getDefaultCity();
    this.weatherService.getWeather(this.zmw).subscribe(
      res => this.weather = res.current_observation
    )

  }

  getQuery() {
     this.weatherService.searchCities(this.search).subscribe(
      res => { this.results = res.RESULTS
          
    }
    )
  }

  chooseCity(city) {
    this.results = [];

    this.weatherService.getWeather(city.zmw).subscribe(
      res => this.weather = res.current_observation
    )

  }
  getDefaultCity() {
    if(localStorage.city) {
      this.zmw = JSON.parse(localStorage.city).zmw ;
      return
    }
    this.zmw = '00000.400.33562'
  }
        
}
