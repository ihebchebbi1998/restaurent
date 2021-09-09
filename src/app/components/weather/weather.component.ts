import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  weather: any={};
  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      city: ['']
    })
  }
search(){
console.log('here city',this.weather);
this.weatherService.getCityWeather(this.weather).subscribe()
}
}
