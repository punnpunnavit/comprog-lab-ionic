import { WeatherProviderService } from './../weather-provider.service';
import { Component } from '@angular/core';
import {Observable} from 'rxjs'
import {Temp,MyData} from '../../../src/app/model/temp.model'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public weather$: Observable<MyData>;

  public district:String;
  public subdistrict:String;

  constructor(private tempProvider: WeatherProviderService) {
  }

  getWeatherData(){
    this.weather$=this.tempProvider.getWeatherData(this.district,this.subdistrict);
  }
}
