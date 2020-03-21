import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private JwtHelper: JwtHelperService, private router: Router) {
  }
  canActivate() {

    var token = localStorage.getItem("auth_jwt");
    
    if (token && !this.JwtHelper.isTokenExpired(token)) {
      console.log(this.JwtHelper.decodeToken(token));
      return true;
    }

    this.router.navigate(["login"]);
    return false;
  }
}

