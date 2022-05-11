import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService{
  constructor(){
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
