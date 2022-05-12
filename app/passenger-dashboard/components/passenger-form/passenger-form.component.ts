import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template:`
  <form #form="ngForm" novalidate> // novalidate to use angulars built in validation
    {{ detail | json }}
    <div>
      Passenger name:
      <input
        name="fullname"
        [ngModel]="detail?.fullname"> //[]="string" sets the initial value when its available
    </div>
    <div>
      Passenger ID:
      <input
        name="id"
        [ngModel]="detail?.id"> //[]="string" sets the initial value when its available
    </div>

    <div>
      <label>
        <input
          type="radio"
          [value]="true"
          name="checkedIn"
          [ngModel]="detail?.checkedIn"
          (ngModelChange)="toggleCheckIn($event)">
          Yes
      </label>
      <label>
        <input
          type="radio"
          [value]="false"
          name="checkedIn"
          [ngModel]="detail?.checkedIn"
          (ngModelChange)="toggleCheckIn($event)">
          No
      </label>
    </div>

    <div *ngIf="form.value.checkedIn">
      Check In Date:
      <input
        type="number"
        name="checkInDate"
        [ngModel]="detail?.checkInDate">
    </div>
    {{ form.value | json }}
  </form>`
})
export class PassengerFormComponent{
  @Input()
  detail: Passenger;
  toggleCheckIn(checkedIn: boolean){
    if(checkedIn){
      this.detail.checkInDate = Date.now();
    }
  }
}
