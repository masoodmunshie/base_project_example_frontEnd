import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { auth, auth_response } from '../models/auth.model';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth_response: auth_response;

  constructor(public login_service: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(LoginForm){
    console.log(LoginForm);
  }

  Login(userLogin:auth){
    
    this.login_service.GenerateToken(userLogin).subscribe(res => {
      this.auth_response = new auth_response();
      this.auth_response = res as auth_response;
      localStorage.setItem("auth_jwt", this.auth_response.token);
      this.router.navigate(['']);
      
    },
    err => {
      this.auth_response.success = false;
      this.auth_response.message = "Failed to connect";
    })

  }

}
