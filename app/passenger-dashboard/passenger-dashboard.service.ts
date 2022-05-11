import { Passenger } from "./models/passenger.interface";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
@Injectable() //tells angular we can inject things into its controller.
export class PassengerDashboardService{
  constructor(private http: Http){

  }
  getPassengers(): Passenger[]{ //returns an array of passenger
    return [{
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
