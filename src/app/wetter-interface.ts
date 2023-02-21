export interface WetterData {
    list: List[]
    
  }
  
  export interface Coord {
    lon: number
    lat: number
  }
  export interface List {
    dt: number
    main: Main
    wind: Wind
    weather: Weather[]
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
  export interface Weather {
    id: number
    main: string
    description: string
    icon: string
  }
  
 