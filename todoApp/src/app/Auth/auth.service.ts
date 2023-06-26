import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService1 {
isLoggedIn: boolean=false;
public islogged =new BehaviorSubject<boolean>(false);
constructor() { }

}
