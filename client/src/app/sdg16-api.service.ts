import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Sdg16ApiService {

  constructor(private http: HttpClient) { }

  serverURL = `https://3000-red-ape-1gv589zq.ws-eu03.gitpod.io`;

  getBribery(){ //Tutti senza criterio
    const url = `${this.serverURL}/bribery`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getGeoAreaNameBribery(GeoAreaName : string){ //Ricerca attraverso GeoAreaName
    const url = `${this.serverURL}/bribery/${GeoAreaName}`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getYearBribery(Year: string){ //Ricerca per Anno
    const url = `${this.serverURL}/bribery/get-year/${Year}`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getExpense(){ //Tutti senza criterio
    const url = `${this.serverURL}/expense`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getGeoAreaNameExpense(GeoAreaName : string){ //Ricerca attraverso GeoAreaName
    const url = `${this.serverURL}/expense/${GeoAreaName}`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getYearExpense(Year: string){ //Ricerca per Anno
    const url = `${this.serverURL}/expense/get-year/${Year}`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getBirth(){ //Tutti senza criterio
    const url = `${this.serverURL}/birth`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getGeoAreaNameBirth(GeoAreaName : string){ //Ricerca attraverso GeoAreaName
    const url = `${this.serverURL}/birth/${GeoAreaName}`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getYearBirth(Year: string){ //Ricerca per Anno
    const url = `${this.serverURL}/birth/get-year/${Year}`
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }
}
