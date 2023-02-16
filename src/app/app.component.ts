import { WetterService } from './wetter.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WetterData, Wind } from './wetter-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'el tiempo';
  minTemperature:number;
  maxTemperature:number;
  temperature:number;
  windSpeed:number;
  humidity:number;
  stadt: string = "";
  stadtDisplay:string = "";
  land:number;

  constructor(private WetterService:WetterService) { }

  ngOnInit() {
    if(this.stadt == "")
    {
      this.stadt = "karlsruhe"
    }
    this.getWetterData(this.stadt);
    this.stadtDisplay = this.stadt;
    this.stadt = "";
  }

  onSubmit(){
    
    this.getWetterData(this.stadt);
    this.stadtDisplay = this.stadt;
    this.stadt = "";
  }

  async getWetterData(stadt: string){
    const result = await this.WetterService.getWetterData(stadt);
    this.minTemperature = result.list[0].main.temp_min;
    this.maxTemperature = result.list[0].main.temp_max;
    this.temperature = result.list[0].main.temp;
    this.humidity = result.list[0].main.humidity;
    this.windSpeed = result.list[0].wind.speed;
    //this.land = result.list
    console.log(result);
   }
  
}

