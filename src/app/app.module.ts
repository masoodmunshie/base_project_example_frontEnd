import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLayoutsComponent } from './layouts/home-layouts/home-layouts.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { RolesComponent } from './userManagement/roles/roles.component';
import { UsersComponent } from './userManagement/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AgGridModule } from 'ag-grid-angular';
import { MatSliderModule } from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';

export function tokenGetter() {
  return localStorage.getItem("auth_jwt");
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
    AgGridModule.withComponents([]),
    AppRoutingModule, 
    MatSliderModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatTreeModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
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
