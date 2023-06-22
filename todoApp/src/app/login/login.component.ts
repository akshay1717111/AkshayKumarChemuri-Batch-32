import { Component,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService1 } from '../Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
@Output() sendLoginvalue=new EventEmitter();
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
      console.log('user Authenticatesd');
      this.aService.isLoggedIn = true;
      console.log(this.aService.isLoggedIn)
      this.sendLoginvalue.emit(this.aService.isLoggedIn);
       
      this.route.navigate(['/profile']);
  } else {
    console.log('user NOT Authenticatesd');
    this.aService.isLoggedIn = false;
    console.log(this.aService.isLoggedIn)
    this.sendLoginvalue.emit(this.aService.isLoggedIn);
   alert('InValid details!!!')
  }

  }
  
}
