import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Sdg16ApiService {

  constructor(private http: HttpClient) { }

  serverURL = `https://3000-be0831fa-93bf-4319-9c8e-62ebbe220ce5.ws-eu03.gitpod.io`;

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
}
