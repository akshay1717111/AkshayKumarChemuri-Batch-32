import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './guards/auth.service';

const routes: Routes = [{path:'signup',component:SignupComponent},{path:'login',component:LoginComponent, canDeactivate:[AuthService]}
,{path:'profile',component: ProfileComponent, canActivate: [AuthService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
