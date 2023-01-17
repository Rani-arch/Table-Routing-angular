import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  tab: any = JSON.parse(localStorage.getItem('session'));
  public isAuthenticated(): boolean {
    alert(6);
    console.log(this.tab);
    console.log(this.tab.token);
    // const token = localStorage.getItem('token');
    if (this.tab.token) {
      return true;
    } else {
      return false;
    }
  }
}
