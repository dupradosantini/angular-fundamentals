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
    <passenger-viewer></passenger-viewer>
  </div>
  `
})
export class AppComponent {
}
