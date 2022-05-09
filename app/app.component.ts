import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //basic root component
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <img [src]="mander">
      <input type="text" [value]="name">
      <div>
        {{numberOne + numberTwo}} //Angular does the calculation for us, since they are number values in a component.
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }} //ternary operator
      </div>
    </div>
  `
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  mander: string = "img/mander.jpg";
  name: string = "Luis";

  constructor(){
    this.title = "Ultimate Angular"
  }

}
