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
isDirty = false;
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
      this.aService.islogged.next(!this.aService.islogged.value);
      
      this.sendLoginvalue.emit(this.aService.isLoggedIn);
       
      this.route.navigate(['/profile']);
  } else {
    this.aService.isLoggedIn = false;
    this.aService.islogged.next(false);
    this.sendLoginvalue.emit(this.aService.isLoggedIn);
   alert('InValid details!!!')
  }

  }
  onInputChange(){
    this.isDirty = true;
  }
  canDeactivate(): boolean {
    if (this.isDirty) {
      return confirm('Are you sure you want to leave this page? Your changes will be lost.');
    }
    return true;
  }
}
