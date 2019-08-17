import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(private token: TokenStorageService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.token.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
