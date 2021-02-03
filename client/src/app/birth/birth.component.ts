import { Component, OnInit } from '@angular/core';
import { Sdg16ApiService } from '../sdg16-api.service';
import { Observable } from 'rxjs';

import { DatiNazioni } from './dati_nazioni.model'

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit {

  query: string;
  obs: Observable<Object>;
  dati_nascite: any;

  title: string;
  type: string;
  data: any[];
  columnNames: string[];
  width: number;
  height: number;
  options: any;

  research: boolean = false;

  constructor(public sdg_service: Sdg16ApiService) { }
  ngOnInit(): void {

    this.obs = this.sdg_service.getBirth();
    this.obs.subscribe(
      (data) => {
        this.loadMap(data)
      });
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }

    //pulizia query
    this.query = query.value.trim();
    console.log(`Query: "${this.query}"`);
    if (this.query) {
      this.obs = this.sdg_service.getGeoAreaNameBirth(this.query);
      this.obs.subscribe((data) => {
        this.dati_nascite = data;
        console.log(this.dati_nascite)
      });
    } else {
      this.obs = this.sdg_service.getBirth();
      this.obs.subscribe((data) => {
        this.dati_nascite = data;
        console.log(this.dati_nascite)
      });
    }

    this.research = true

  }

  loadMap(data) {
    this.dati_nascite = data;
    this.title = 'Certificati Nascite';
    this.type = 'GeoChart';

    this.data = [];

    for (const nazione of this.dati_nascite) {
      this.data.push(
        [DatiNazioni.conversione(nazione.GeoAreaCode)]
      )
    }
    this.columnNames = ['Nazione', 'Percentuale'];
    this.width = 1000;
    this.height = 500;
    this.options = {

    };
  }

}
