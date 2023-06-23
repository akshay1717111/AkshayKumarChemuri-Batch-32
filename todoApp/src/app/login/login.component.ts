import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService1 } from '../Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
@Input() sendLoginvalue=new EventEmitter<boolean>();
constructor(private route:Router, private aService: AuthService1){}
 loginDetails={
  email:'',
  password:''
}
ngOninit(){
  console.log(this.aService.isLoggedIn);
}

  login(){
    if (this.loginDetails.email === 'a@a.com' &&
    this.loginDetails.password === '12345') {
     
      this.aService.isLoggedIn = true;
      
      this.sendLoginvalue.emit(this.aService.isLoggedIn);
       
      this.route.navigate(['/profile']);
  } else {
    this.aService.isLoggedIn = false;
    this.sendLoginvalue.emit(this.aService.isLoggedIn);
   alert('InValid details!!!')
  }

  }
  
}
