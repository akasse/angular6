import { Component, OnInit } from '@angular/core';
import { User } from "../../models/index";

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-accueil',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private _loadingBar: SlimLoadingBarService) {
    this._loadingBar.interval = 10;
  }




  ngOnInit(): void {

    this.startLoading();

  }


  startLoading() {
    this._loadingBar.start(() => {

    });
  }

  stopLoading() {
    this._loadingBar.stop();
  }

  completeLoading() {
    this._loadingBar.complete();
  }




}

