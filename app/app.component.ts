import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //basic root component
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input type="text" [value]="name" (input)="handleChange($event.target.value)">
      <div *ngIf="name.length > 2">
        Searching for ... {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {
  title: string;

  name: string = "";


  handleChange(value: string){
    this.name = value;
  }

  constructor(){
    this.title = "Ultimate Angular"
  }

}
