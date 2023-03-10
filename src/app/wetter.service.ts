import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
// import { environment } from '../environments/environment';
import { Coord, WetterData } from './wetter-interface';

@Injectable({
  providedIn: 'root'
})
export class WetterService {

  constructor(private httpClient:HttpClient) { }

  
  async getWetterData(stadt: string) : Promise<WetterData>{
    const coordinates: Coord = await this.getCityCoordinates(stadt);
    console.log(coordinates);
    return firstValueFrom(this.httpClient.get<WetterData>(`${'https://api.openweathermap.org/data/2.5'}/forecast`, {
      params: new HttpParams()
      .set('lat', coordinates.lat)
      .set('lon', coordinates.lon)
      .set('units', 'metric')
      .set('appid', 'ccd61719dbe88ed6e540b08868d65e99')
    }));
  }

  /** Gibt die Koordinaten anhand vom Stadtnamen zurück 
   * @returns Koordinaten Coord
  */
  private getCityCoordinates(stadt: string): Promise<Coord> {
    
    return firstValueFrom(this.httpClient.get<Coord[]>(`${'https://api.openweathermap.org/geo/1.0'}/direct`, {
      params: new HttpParams()
      .set('q', stadt)
      .set('appid', 'ccd61719dbe88ed6e540b08868d65e99')
    })).then(res => res[0]);
  }

  // getWetterData(){
  //   let headers = new HttpHeaders({});
  //   this.httpClient.get<any>(environment.XRapidAPIHostValue, {
  //     headers: headers
  //   }).subscribe(result =>{
  //     console.log(result)
  //   });
  // }
}
