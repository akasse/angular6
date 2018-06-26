import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import {
  single,
  multi
} from './data';

@Component({
  templateUrl: 'dashboard.component.html',
  styles: [`
  .legend-wrap_ak {
    width: fit-content;
    background-color: blue
  }
  `]
})
export class DashboardComponent implements OnInit {


  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

   d =  document.querySelector('.legend-wrap');


  constructor() {

    Object.assign(this, { single });
  }



  ngOnInit(): void {
    this.d.className = '.legend-wrap_ak';



  }

  //==================
  onSelect(event) {
    console.log(event);
  }
  //==================

}
