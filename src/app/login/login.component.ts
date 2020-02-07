import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { auth, auth_response } from '../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth_response: auth_response;

  constructor(public login_service: LoginService) { }

  ngOnInit() {
  }

  Login(userLogin:auth){
    
    this.login_service.GenerateToken(userLogin).subscribe(res => {
      this.auth_response = res as auth_response;
    },
    err => {
      this.auth_response.success = false;
      this.auth_response.message = "Failed to connect";
    })

  }

}
