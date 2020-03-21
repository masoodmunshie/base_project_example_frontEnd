import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { request } from '../models/request.model';

@Injectable({
    providedIn: 'root'
  })

  export class userManagementService{

    constructor(private http: HttpClient){}

    getRoles(req: request){

      let token = localStorage.getItem("auth_jwt");
      return this.http.post('https://localhost:44394/api/user/roles', req, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })});
    }
      
  }
