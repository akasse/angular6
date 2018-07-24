import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sens: boolean = true;
  radioModel = 'bateau';
  items: string[] = [];

  heures: SelectHeures[] = [];

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  bsConfig: Partial<BsDatepickerConfig>;


  selectHeureDepart: SelectHeures;
  selectHeureArrivee: SelectHeures;


  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });

    this.initDataAdresse();


  }

  ngOnInit() {

    //=====================================
    $(document).ready(function () {
      (document.querySelector('.panel-default') as HTMLElement).style.border = '0px';
      let header = (document.querySelector('.card-header') as HTMLElement);
      header.style.border = '0px';
      header.style.backgroundColor = '#fefefe';
      /* let panel:HTMLElement = <HTMLElement> document.querySelectorAll('.panel-default');
      panel[0].style = `border:0px;`;
      let header =  <HTMLElement> document.querySelectorAll('.card-header');
      header[0].style = `border:0px;background-color: #fefefe;`; */

    });

    //=====================================

    this.initHeures();
    this.iniNBVoyageur();
  }

  oneAtATime: boolean = true;
  open($event) {
    console.log($event);

  }
  onSelectHeures($event) {
    console.log($event);
    console.log(this.selectHeureArrivee);

    console.log(this.selectHeureDepart);


  }

  initHeures() {
    for (let i = 0; i <= 9; i++) {
      this.heures.push({ id: i, name: `0${i}` });
    }
    for (let i = 10; i <= 23; i++) {
      this.heures.push({ id: i, name: `${i}` });
    }

    for (let i = 0; i <= 9; i++) {
      this.items.push(`0${i}`);
    }
    for (let i = 10; i <= 23; i++) {
      this.items.push(`${i}`);
    }


    for (let i = 0; i <= 9; i++) {
      this.items.push(`0${i}`);
    }
    for (let i = 10; i <= 23; i++) {
      this.items.push(`${i}`);
    }
  }

  // selectb heures
  public doSelect = (value: any) => console.log('SingleDemoComponent.doSelect', value);
  nombreVoyageurs: NombreVoyageurs[];
  selectAges: NombreVoyageurs[];
  //==============================
  nb_voyageur: number = 1;

  nbVoyageur(nb: number) {
    if (nb == 0) {
      if (this.nb_voyageur != 1) {
        this.nb_voyageur = this.nb_voyageur - 1;
        this.nombreVoyageurs.pop();
      }
    } else {
      if (this.nb_voyageur != 9) {
        this.nb_voyageur = this.nb_voyageur + 1;
        let id  = new Date() ;
        this.nombreVoyageurs.push({
          id: id.getMilliseconds()+1,
          trasAge: '26-59',
          bon: ''
        });
        console.log(this.nombreVoyageurs);

      }
    }

  }

  iniNBVoyageur() {
    let id  = new Date() ;
    this.nombreVoyageurs = [
      {
        id: id.getMilliseconds()+1,
        trasAge: '25-59',
        bon: ''
      }
    ];

    this.selectAges = [
      {
        id: 1,
        trasAge: '26-59'
      },
      {
        id: 2,
        trasAge: '60 et +'
      },
      {
        id: 3,
        trasAge: '12-25'
      },
      {
        id: 4,
        trasAge: '4-11'
      },
      {
        id: 4,
        trasAge: '0-3'
      },
    ];
  }

  onSelecAge($event:string, item: NombreVoyageurs){
    console.log($event);
    console.log(item);
    let index=  this.nombreVoyageurs.indexOf(item);
    this.nombreVoyageurs[index].trasAge = $event;
    console.log(this.nombreVoyageurs);
  }

  remove(item: NombreVoyageurs) {
    let index=  this.nombreVoyageurs.indexOf(item);
    this.nombreVoyageurs.splice(index,1);
      this.nb_voyageur = this.nb_voyageur - 1;

    console.log(item);
  }

  recherche(){
    console.log('pas', this.nombreVoyageurs);

  }


  // init data
  adresses: any[] = [];

  public ngxValue: any[] = [];
  public ngxValue2: any[] = [];
    public ngxDisabled = false;

  initDataAdresse(){
    this.adresses  = [
      {
          id: 100,
          text: 'Austria',
          children: [
              {id: 54, text: 'Vienna'}
          ]
      },
      {
          id: 200,
          text: 'Belgium',
          children: [
              {id: 2, text: 'Antwerp'},
              {id: 9, text: 'Brussels'}
          ]
      },
      {
          id: 300,
          text: 'Bulgaria',
          children: [
              {id: 48, text: 'Sofia'}
          ]
      },
      {
          id: 400,
          text: 'Croatia',
          children: [
              {id: 58, text: 'Zagreb'}
          ]
      },
      {
          id: 500,
          text: 'Czech Republic',
          children: [
              {id: 42, text: 'Prague'}
          ]
      },
      {
          id: 600,
          text: 'Denmark',
          children: [
              {id: 13, text: 'Copenhagen'}
          ]
      },
      {
          id: 700,
          text: 'England',
          children: [
              {id: 6, text: 'Birmingham'},
              {id: 7, text: 'Bradford'},
              {id: 26, text: 'Leeds', disabled: true},
              {id: 30, text: 'London'},
              {id: 34, text: 'Manchester'},
              {id: 47, text: 'Sheffield'}
          ]
      },
      {
          id: 800,
          text: 'Finland',
          children: [
              {id: 25, text: 'Helsinki'}
          ]
      },
      {
          id: 900,
          text: 'France',
          children: [
              {id: 35, text: 'Marseille'},
              {id: 40, text: 'Paris'}
          ]
      },
      {
          id: 1000,
          text: 'Germany',
          children: [
              {id: 5, text: 'Berlin'},
              {id: 8, text: 'Bremen'},
              {id: 12, text: 'Cologne'},
              {id: 14, text: 'Dortmund'},
              {id: 15, text: 'Dresden'},
              {id: 17, text: 'Düsseldorf'},
              {id: 18, text: 'Essen'},
              {id: 19, text: 'Frankfurt'},
              {id: 23, text: 'Hamburg'},
              {id: 24, text: 'Hannover'},
              {id: 27, text: 'Leipzig'},
              {id: 37, text: 'Munich'},
              {id: 50, text: 'Stuttgart'}
          ]
      },
      {
          id: 1100,
          text: 'Greece',
          children: [
              {id: 3, text: 'Athens'}
          ]
      },
      {
          id: 1200,
          text: 'Hungary',
          children: [
              {id: 11, text: 'Budapest'}
          ]
      },
      {
          id: 1300,
          text: 'Ireland',
          children: [
              {id: 16, text: 'Dublin'}
          ]
      },
      {
          id: 1400,
          text: 'Italy',
          children: [
              {id: 20, text: 'Genoa',
              children: [
                {id: 20, text: 'ak'},
                {id: 36, text: 'hkjk'},
                {id: 38, text: 'jlkjl'}
            ]},
              {id: 36, text: 'Milan'},
              {id: 38, text: 'Naples'},
              {id: 39, text: 'Palermo'},
              {id: 44, text: 'Rome'},
              {id: 52, text: 'Turin'}
          ]
      },
      {
          id: 1500,
          text: 'Latvia',
          children: [
              {id: 43, text: 'Riga'}
          ]
      },
      {
          id: 1600,
          text: 'Lithuania',
          children: [
              {id: 55, text: 'Vilnius'}
          ]
      },
      {
          id: 1700,
          text: 'Netherlands',
          children: [
              {id: 1, text: 'Amsterdam'},
              {id: 45, text: 'Rotterdam'},
              {id: 51, text: 'The Hague'}
          ]
      },
      {
          id: 1800,
          text: 'Poland',
          children: [
              {id: 29, text: 'Łódź'},
              {id: 31, text: 'Kraków'},
              {id: 41, text: 'Poznań'},
              {id: 56, text: 'Warsaw'},
              {id: 57, text: 'Wrocław'}
          ]
      },
      {
          id: 1900,
          text: 'Portugal',
          children: [
              {id: 28, text: 'Lisbon'}
          ]
      },
      {
          id: 2000,
          text: 'Romania',
          children: [
              {id: 10, text: 'Bucharest'}
          ]
      },
      {
          id: 2100,
          text: 'Scotland',
          children: [
              {id: 21, text: 'Glasgow'}
          ]
      },
      {
          id: 2200,
          text: 'Spain',
          children: [
              {id: 4, text: 'Barcelona'},
              {id: 32, text: 'Madrid'},
              {id: 33, text: 'Málaga'},
              {id: 46, text: 'Seville'},
              {id: 53, text: 'Valencia'},
              {id: 59, text: 'Zaragoza'}
          ]
      },
      {
          id: 2300,
          text: 'Sweden',
          children: [
              {id: 22, text: 'Gothenburg'},
              {id: 49, text: 'Stockholm'}
          ]
      }
  ];
  }


  selectTest($event){
    console.log($event);

  }
}


interface SelectHeures {
  id: number;
  name: string;
}

interface NombreVoyageurs {
  id: number;
  bon?: string;
  trasAge?:string;
}



