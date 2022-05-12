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
    {{ form.value | json }}
  </form>`
})
export class PassengerFormComponent{
  @Input()
  detail: Passenger;
}
