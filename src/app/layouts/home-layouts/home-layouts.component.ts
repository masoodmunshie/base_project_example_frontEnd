import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-layouts',
  templateUrl: './home-layouts.component.html',
  styleUrls: ['./home-layouts.component.css']
})
export class HomeLayoutsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Logout()
  {
    localStorage.removeItem("auth_jwt");
    this.router.navigate(['login']);
  }

}
