import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MyData} from '../../src/app/model/temp.model'


@Injectable({
  providedIn: 'root'
})
export class WeatherProviderService {
  
  
  constructor(public http:HttpClient) { }



  getWeatherData(district:String,subdistrict:String){
    return this.http.get<MyData>(`https://7f0e-35-245-90-124.ngrok.io/getweather?district=${district}&subdistrict=${subdistrict}`)
  } 
 
}
