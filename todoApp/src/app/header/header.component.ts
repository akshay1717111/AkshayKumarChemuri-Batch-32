import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { AuthService1 } from '../Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public aservice :AuthService, public bservice:AuthService1) { }
  display :any;
  ngOnInit(): void {
    this.bservice.islogged.subscribe(arg => this.display = arg?"Logout":"Login");
  }
  
  

}
