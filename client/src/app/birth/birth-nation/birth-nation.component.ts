import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { Sdg16ApiService } from 'src/app/sdg16-api.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common'

@Component({
  selector: 'app-birth-nation',
  templateUrl: './birth-nation.component.html',
  styleUrls: ['./birth-nation.component.css']
})
export class BirthNationComponent implements OnInit {

  routeObs: Observable<ParamMap>;
  nazione: any;
  SDG16ServiceObs: Observable<Object>;

  title: string;
  type: string;
  data: any[];
  columnNames: string[];
  width: number;
  height: number;
  options: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Sdg16ApiService,
    private location: Location) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let name = params.get('GeoAreaName');
    console.log(name)
    this.SDG16ServiceObs = this.service.getGeoAreaNameBirth(name);
    this.SDG16ServiceObs.subscribe(
      (data) => {
        this.nazione = data[0];
        console.log(this.nazione);
        this.title = 'Certificati Nascite';
        this.type = 'BarChart';
        this.data =
          [
            ['2006', this.nazione.Year_2006],
            ['2007', this.nazione.Year_2007],
            ['2009', this.nazione.Year_2009],
            ['2010', this.nazione.Year_2010],
            ['2011', this.nazione.Year_2011],
            ['2012', this.nazione.Year_2012],
            ['2013', this.nazione.Year_2013],
            ['2014', this.nazione.Year_2014],
            ['2015', this.nazione.Year_2015],
            ['2016', this.nazione.Year_2016],
            ['2017', this.nazione.Year_2017],
            ['2018', this.nazione.Year_2018],
            ['2019', this.nazione.Year_2019],
          ];
        this.columnNames = ['Anno', 'Percentuale'];
        this.width = 300;
        this.height = 300;
        this.options = {

        };
      }
    )
  }

  back(): void {
    this.location.back();
  }
}
