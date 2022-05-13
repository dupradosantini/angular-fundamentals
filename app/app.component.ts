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
    <nav class="nav">
    <a
      routerLink="/"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact: true}">
      Home
    </a>
    <a
      routerLink="/oops"
      routerLinkActive="active">
      404
    </a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
}
