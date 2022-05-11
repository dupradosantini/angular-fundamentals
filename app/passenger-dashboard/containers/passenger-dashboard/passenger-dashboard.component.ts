import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
   <div>
      <passenger-count [items]="passengers">
      </passenger-count>
      <passenger-detail></passenger-detail>
      <h3> Airline Passengers </h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out': !passenger.checkedIn
            }"></span>
           {{ i }}: {{passenger.fullname}}
           <div class="date">
             Check in date:
             {{ passenger.checkInDate? (passenger.checkInDate | date: "yMMMd" | uppercase) : "Not Checked In" }}
           </div>
           <div class="children">
             Children: {{ passenger.children?.length || 0}}
           </div>
        </li>
      </ul>
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
