import { Component, OnInit } from '@angular/core';
import { Sdg16ApiService } from '../sdg16-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  query: string;
  obs: Observable<Object>;
  dati_spese: any;

  constructor(public sdg_service: Sdg16ApiService) { }

  ngOnInit(): void { }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    //pulizia query
    this.query = query.value.trim();
    console.log(this.query);
    if (this.query) {
      console.log(`Il sistema ha considerato (${this.query}) come stringa non vuota`)
      this.obs = this.sdg_service.getGeoAreaNameExpense(this.query);
      this.obs.subscribe((data) => { this.dati_spese = data; console.log(this.dati_spese) });
    } else {
      console.log(`Il sistema ha considerato (${this.query}) come stringa vuota o null`)
      this.obs = this.sdg_service.getExpense();
      this.obs.subscribe((data) => { this.dati_spese = data; console.log(this.dati_spese) });
    }

  }

}
