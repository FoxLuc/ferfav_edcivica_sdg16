import { Component, OnInit } from '@angular/core';
import { Sdg16ApiService } from '../sdg16-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit {

  query: string;
  obs: Observable<Object>;
  dati_nascite: any;

  constructor(public sdg_service: Sdg16ApiService) { }
  ngOnInit(): void { }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }

    //pulizia query
    this.query = query.value.trim().replace(" ", "");
    console.log(`Query: "${this.query}"`);
    if (this.query) {
      this.obs = this.sdg_service.getGeoAreaNameBirth(this.query);
      this.obs.subscribe((data) => { this.dati_nascite = data; console.log(this.dati_nascite) });
    } else {
      this.obs = this.sdg_service.getBirth();
      this.obs.subscribe((data) => { this.dati_nascite = data; console.log(this.dati_nascite) });
    }

  }

}
