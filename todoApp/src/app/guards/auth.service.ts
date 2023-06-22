import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService1 } from '../Auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

constructor(private routers:Router, private aService: AuthService1) { }
canActivate(){
  const isLoggedIn=this.aService.isLoggedIn;
  console.log("login", isLoggedIn);
  if(!isLoggedIn){
    this.routers.navigate(['/login']);
    return false;
    }
    return true;
}

}

