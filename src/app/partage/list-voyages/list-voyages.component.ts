import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { INgxSelectOption } from 'ngx-select-ex';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'list-voyages',
  templateUrl: './list-voyages.component.html',
  styleUrls: ['./list-voyages.component.scss']
})
export class ListVoyagesComponent implements OnInit {



  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear()+1, 1, 1);


  public items: string[] = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
  'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
  'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
  'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
  'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
  'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
  'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
  'Zagreb', 'Zaragoza', 'Łódź'];

  public ngxControl = new FormControl();

  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault;

  itemId:any;
  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      //alert('ok');

      $('.post-module').hover(function() {
        $(this).find('.description').stop().animate({
          height: "toggle",
          opacity: "toggle"
        }, 300);
      });

  });}

  trajet(){
    console.log('=====trajet====');

  }


  public doNgxDefault(): any {
    return this._ngxDefault;
}

public inputTyped = (source: string, text: string) => console.log('SingleDemoComponent.inputTyped', source, text);

public doFocus = () => console.log('SingleDemoComponent.doFocus');

public doBlur = () => console.log('SingleDemoComponent.doBlur');

public doOpen = () => console.log('SingleDemoComponent.doOpen');

public doClose = () => console.log('SingleDemoComponent.doClose');

public doSelect = (value: any) => console.log('SingleDemoComponent.doSelect', value);

public doRemove = (value: any) => console.log('SingleDemoComponent.doRemove', value);

public doSelectOptions = (options: INgxSelectOption[]) => console.log('SingleDemoComponent.doSelectOptions', options);

}
