import { Passenger } from "./models/passenger.interface";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

const PASSENGER_API: string = '/api/passengers';
@Injectable() //tells angular we can inject things into its controller.
export class PassengerDashboardService{
  constructor(private http: Http){

  }
  getPassengers(): Observable<Passenger[]>{ //returns an array of passenger
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger>{ //returns an array of passenger
    let headers = new Headers({
      "Content-type": 'application/json'
    })
    let options = new RequestOptions({
      headers: headers
    })
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removePassenger(passenger: Passenger): Observable<Passenger>{ //returns an array of passenger
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPassenger(id: number): Observable<Passenger>{ //returns one passenger
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
