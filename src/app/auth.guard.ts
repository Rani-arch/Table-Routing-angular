import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  tab: any = JSON.parse(localStorage.getItem('session'));

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    console.log(this.tab);

    if (this.tab.token) {
      return true;
    } else {
      alert(5);

      this.router.navigate(['']);
      return false;
    }
  }
}
