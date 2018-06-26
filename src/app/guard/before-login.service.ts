import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../services/token.service';

@Injectable()
export class BeforeLoginService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('==r===',route.url);
    console.log('=====1====',state.url);
    let bool = this.token.loggedIn();
    if (bool) {
      this.token.getRouter(state.url);
    }
    return !bool;
  }
  constructor(private token: TokenService) {
    console.log('====VALID TOKEB====',this.token.isValid());




   }

}
