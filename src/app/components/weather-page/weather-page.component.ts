import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {
  currentTime:string = "";
  location:string = "";
  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getLocation();
  }
  getLocation(): void {
    if (navigator.geolocation) {
      let currentDate = new Date();
      this.currentTime = currentDate.toISOString();
      console.log(currentDate.toISOString())
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.location = `${longitude},${latitude}`
        console.log(this.currentTime)
        console.log(this.location)
        this.getWeather(`https://ego_diaz:4iz5q3ZQoUHuV@api.meteomatics.com/${this.currentTime}/t_2m:C/${this.location}/json`)
      });
    } else {
      console.log("No support for geolocation")
    }
  }
  
  getWeather(url:string){
    this.apiService.getWeatherInfo(url).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err, "err")
    });
  }
}
