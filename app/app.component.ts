import { Component } from '@angular/core';


interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root', //basic root component
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3> Airline Passengers </h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out': !passenger.checkedIn
            }"></span>
           {{ i }}: {{passenger.fullname}}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  title: string;

  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true
    },
    {
      id: 2,
      fullname: "Luis",
      checkedIn: false
    }];

  constructor(){
    this.title = "Ultimate Angular"
  }
}
