import { Passenger } from "./models/passenger.interface";
import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

const PASSENGER_API: string = '/api/passengers';
@Injectable() //tells angular we can inject things into its controller.
export class PassengerDashboardService{
  constructor(private http: Http){

  }
  getPassengers(): Observable<Passenger[]>{ //returns an array of passenger
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }
}
