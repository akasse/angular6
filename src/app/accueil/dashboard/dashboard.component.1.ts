import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import {
  single,
  multi
} from './data';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pays:any[] = [];

  single: any[];
  multi: any[] = [
  {
    name: 'Cyan',
    series: [
      {
        name: 5,
        value: 2650
      },
      {
        name: 10,
        value: 2800      },
      {
        name: 15,
        value: 2000
      }
    ]
  },
  {
    name: 'Yellow',
    series: [
      {
        name: 5,
        value: 2500
      },
      {
        name: 10,
        value: 3100
      },
      {
        name: 15,
        value: 2350
      }
    ]
  }
];

  view: any[] = [600, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  schemeType: string = 'ordinal';
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Color Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor( ) { }

  ngOnInit(): void {
    this.single = single;
    this.initPays();
    console.log('Pays',this.pays);


  }

  //==================
  onSelect(event) {
    console.log(event);
  }
  //==================

  initPays(){
    this.pays = [
      {
        "nom": "Allemagne",
        "valeur": 40632
      },
      {
        "nom": "États-Unis",
        "valeur": 49737
      },
      {
        "nom": "France",
        "valeur": 36745
      },
      {
        "nom": "Royaume-Uni",
        "valeur": 36240
      },
      {
        "nom": "Espagne",
        "valeur": 33000
      },
      {
        "nom": "Italie",
        "valeur": 35800
      }
    ]
  }
}
