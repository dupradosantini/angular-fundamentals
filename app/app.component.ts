import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //basic root component
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <input
      type="text"
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;

  name: string = "Luis";

  handleClick(){ //Updates name value, one way data flow makes sure all values get updated.
    this.name = "Motto";
  }

  handleInput(event: any){
    this.name = event.target.value;
  }

  handleBlur(event: any){ //When there is a change in the textBox, all name values get updated.
    this.name = event.target.value;
    console.log(event);
  }

  constructor(){
    this.title = "Ultimate Angular"
  }

}
