import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


details=[{type: "name", value: "Akshay Kumar Chemuri"},{type:"University", value:"Wichita state university"},{type: "GPA", value: "4/4"}];
}
