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
    <a routerLink="/">
      Home
    </a>
    <a routerLink="/oops">404</a>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
}
