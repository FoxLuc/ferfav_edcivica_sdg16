import { Component, OnInit } from '@angular/core';
import { Sdg16ApiService } from '../sdg16-api.service';
import { Observable } from 'rxjs';

import { DatiNazioni } from '../dati_nazioni.model'

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  query: string;
  obs: Observable<Object>;
  dati_spese: any;

  title: string;
  type: string;
  data: any[];
  columnNames: string[];
  width: number;
  height: number;
  options: any;

  research: boolean = false;

  selected_year: string;

  constructor(public sdg_service: Sdg16ApiService) { }

  ngOnInit(): void { }

  submit(query: HTMLInputElement): void {

    this.selected_year = "";

    if (!query.value) {
      return;
    }

    //pulizia query
    this.query = query.value.trim();
    console.log(`Query: "${this.query}"`);
    if (this.query) {
      this.obs = this.sdg_service.getGeoAreaNameExpense(this.query);
      this.obs.subscribe((data) => {
        this.dati_spese = data;
        this.loadMap(this.dati_spese)
        console.log(this.dati_spese)
      });
    } else {
      this.obs = this.sdg_service.getExpense();
      this.obs.subscribe((data) => {
        this.dati_spese = data;
        this.loadMap(this.dati_spese)
        console.log(this.dati_spese)
      });
    }

    this.research = true
  }

  //richiesta anno
  submitYear(year: string): void {
    this.selected_year = year;
    console.log(`Year: "${year}"`);
    if (!year) {
      return;
    }
    this.obs = this.sdg_service.getYearExpense(year);
    this.obs.subscribe((data) => {
      this.dati_spese = data;
      this.loadMap(this.dati_spese)
      console.log(this.dati_spese)
    });
  }

  loadMap(data) {

    //configurazione mappa
    this.dati_spese = data;
    this.title = 'Certificati Nascite';
    this.type = 'GeoChart';
    this.data = [];
    this.width = 1000;
    this.height = 500;
    this.options = {};

    //disegno ciascuna nazione sulla mappa
    for (const nazione of this.dati_spese) {
      let year = this.selected_year;
      if (nazione[`Year_${year}`]) {
        this.columnNames = ['Nazione', 'Percentuale'];
        this.data.push(
          [DatiNazioni.conversione(nazione.GeoAreaCode), nazione[`Year_${year}`]]
        )
      }
      if(!year){
        this.columnNames = ['Nazione'];
        this.data.push(
          [DatiNazioni.conversione(nazione.GeoAreaCode)]
        )
      }
    }
  }

}
