import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { auth, auth_response } from '../models/auth.model';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth_response: auth_response;
  // Form validation

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(public login_service: LoginService, private router: Router, private toastre: ToastrService ) { }

  ngOnInit() {
  }

  onSubmit(LoginForm){
    console.log(LoginForm);
  }

  Login(userLogin:auth){
    
    this.login_service.GenerateToken(userLogin).subscribe(res => {
      this.auth_response = new auth_response();
      this.auth_response = res as auth_response;

      if(this.auth_response.success == true)
      {
      localStorage.setItem("auth_jwt", this.auth_response.token);
      this.router.navigate(['']);
      this.toastre.success('Login Successful', 'Authorization');
      }
      else
      {
        this.toastre.error('Login Unsuccessful', 'Authorization')

      }
    },
    err => {
      this.auth_response.success = false;
      this.auth_response.message = "Failed to connect";
      this.toastre.error('Authorization', 'Login Unsuccessful')
    })

  }

}
