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
    <passenger-dashboard></passenger-dashboard>
  </div>
  `
})
export class AppComponent {
}
