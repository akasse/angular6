import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthakService } from '../../services/authak.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { AuthService } from '../../services/auth.service';
import { User, GetData } from '../../models';

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
  user : User;

  constructor(
    private Auth: AuthakService,
    private router: Router,
    private authService: AuthService,
    private _loadingBar: SlimLoadingBarService
  ) {
    this._loadingBar.interval = 10;

   }

   ngOnInit(): void {
    this.user = new User();
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.getProfile();
  }

  logout(event: MouseEvent) {
    this.startLoading();
    event.preventDefault();
    this.logout_();
  }

  logout_() {
    this.authService.logout();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/page/login');
  }

  async getProfile(){
    let res = await this.authService.profile();
     if (res.error == 0) {
      this.user = res.data;
      console.log("==Profil==",this.user);

    } else {
      this.logout_();
    }
    console.log(res)
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




}
