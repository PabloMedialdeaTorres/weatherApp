export interface WetterData {
    list: List[]
    city: City
  }
  
  export interface Coord {
    lon: number
    lat: number
  }
  export interface List {
    dt: number
    main: Main
    wind: Wind
    visibility: number
    pop: number
    dt_txt: string
  }
  
  export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  }

  export interface Wind {
    speed: number
    deg: number
    gust: number
  }
  export interface City {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
  
 