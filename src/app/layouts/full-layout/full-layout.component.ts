import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  TokenService } from '../../services/token.service';
import { AuthakService } from '../../services/authak.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
  providers: [SlimLoadingBarService]
})
export class FullLayoutComponent implements OnInit {


  public loggedIn:boolean = false;


  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  constructor(
    private Auth: AuthakService,
    private router: Router,
    private Token: TokenService,
    private _loadingBar: SlimLoadingBarService
  ) {
    this._loadingBar.interval = 10;
   }

  logout(event: MouseEvent) {
    this.startLoading();
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/page/login');
  }

  startLoading() {
    this._loadingBar.start(() => {
      console.log('Loading complete');
    });
  }

  stopLoading() {
    this._loadingBar.stop();
  }

  completeLoading() {
    this._loadingBar.complete();
  }



  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }
}
