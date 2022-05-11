import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
   <div>
      <passenger-count [items]="passengers">
      </passenger-count>
      <passenger-detail
      *ngFor="let passenger of passengers;"
      [detail]="passenger"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)">
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
  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)
  }
  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id){//if we are in the correct passenger.
        passenger = Object.assign({}, passenger, event); //merges changes.
      }
      return passenger;
    });
    console.log(this.passengers);
  }
}
