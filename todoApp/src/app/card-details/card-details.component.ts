import { Component, EventEmitter, Input, Output } from '@angular/core';
interface iCardDetails{
type: string,
value: string
}
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
@Input() cardDetails:iCardDetails[]=[]

@Output() selectedValue=new EventEmitter();

selectedItem(value: iCardDetails){
  this.selectedValue.emit(value);
  console.log(value);
}
}
