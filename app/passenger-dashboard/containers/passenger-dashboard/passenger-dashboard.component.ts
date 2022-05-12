import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

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
  constructor(private passengerService: PassengerDashboardService){//internal binding (this.passengerService = PassengerDashboardService)
  }
  ngOnInit(){
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data); //synchronous call
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
