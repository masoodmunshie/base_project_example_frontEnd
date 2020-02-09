import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLayoutsComponent } from './layouts/home-layouts/home-layouts.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { RolesComponent } from './userManagement/roles/roles.component';
import { UsersComponent } from './userManagement/users/users.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    HomeLayoutsComponent,
    LoginLayoutComponent,
    DashboardComponent,
    RolesComponent,
    UsersComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44394"],
        blacklistedRoutes: []
      }
    })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    
  ]
})
export class AppModule { }
