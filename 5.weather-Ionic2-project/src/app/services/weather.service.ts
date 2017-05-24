import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Onservable } from 'rxjs/Onservable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService { 
     
    constructor( private http:Http) {};
 
    apiKey = 'a125b51b4bbae88f';
    url = 'http://localhost:8100/api/'+this.apiKey+'/conditions/q';
    autoUrl = 'http://localhost:8100/search/aq?query=';

    getWeather(zmw) {
        return this.http.get(this.url+'/zmw:'+zmw+'.json')
                        .map(res => res.json())
    }

    searchCities(query) {
        return this.http.get(this.autoUrl + query)
                        .map( res => res.json())
    }
}