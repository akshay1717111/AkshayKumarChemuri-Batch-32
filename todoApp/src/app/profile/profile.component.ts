import { Component } from '@angular/core';
interface listDetails{
  firstName: string,
  lastName: string,
  email: string,
  cardDetails:[{
    type: string,
    value: string
  }]
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
details={
  firstName: "Akshay",
  lastName: "Kumar",
  email: "akshay@gmail.com",
cardDetails: [{type: "name", value: "Akshay Kumar Chemuri"},{type:"University", value:"Wichita state university"},{type: "GPA", value: "4/4"}]
};

selectedContent(event: object){
// console.log(event);
}

}
