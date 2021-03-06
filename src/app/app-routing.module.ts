import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeLayoutsComponent } from './layouts/home-layouts/home-layouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { AuthGuard } from './services/authGuard.service';
import { RolesComponent } from './userManagement/roles/roles.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutsComponent,
     canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      }, 
      { path : 'roles', component: RolesComponent}
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }

  // {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
