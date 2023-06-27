import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { AuthService1 } from '../Auth/auth.service';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

constructor(private routers:Router, public aService: AuthService1) { }
canActivate(){
  const isLoggedIn=this.aService.isLoggedIn;
  console.log("login", isLoggedIn);
  if(!isLoggedIn){
    this.routers.navigate(['/login']);
    return false;
    }
    return true;
}
//deactivate method 
canDeactivate(component: LoginComponent): Observable<boolean> | Promise<boolean> | boolean {
  if (component.canDeactivate) {
    // If the component has a 'canDeactivate' method, call it
    return component.canDeactivate();
  }
  // If the component does not have a 'canDeactivate' method, allow navigation
  return true;
}
}

