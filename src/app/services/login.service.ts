import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auth } from '../models/auth.model';


@Injectable({
    providedIn: 'root'
  })

  export class LoginService{

    constructor(private http: HttpClient){}

    GenerateToken(UserLogin: auth){

        return this.http.post("https://localhost:44394/api/auth/login", UserLogin);
    }

  }