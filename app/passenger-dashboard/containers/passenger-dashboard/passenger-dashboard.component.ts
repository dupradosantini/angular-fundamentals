import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
   <div>
      <passenger-count [items]="passengers">
      </passenger-count>
      <passenger-detail *ngFor="let passenger of passengers;" [detail]="passenger">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];
  constructor(){}
  ngOnInit(){
    console.log('ngOnInit');
    this.passengers = [{
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: "Luis",
      checkedIn: false,
      checkInDate: null,
      children: null
    }];
  }
}
