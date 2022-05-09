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
        [ngModel]="name"
        (ngModelChange)="handleChange($event)">
      <input
        type="text"
        [(ngModel)]="name">
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

  handleChange(value: string){
    this.name = value;
  }
  constructor(){
    this.title = "Ultimate Angular"
  }

}
