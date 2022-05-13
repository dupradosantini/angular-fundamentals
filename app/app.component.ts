import { Component } from '@angular/core';

interface Nav{
  link: string,
  name: string,
  exact: boolean
}


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
    *ngFor="let item of nav"
      [routerLink]="item.link"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact: item.exact}">
      {{ item.name }}
    </a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: "/",
      name: "Home",
      exact: true
    },
    {
      link: "/oops",
      name: "404",
      exact: false
    }
  ]
}
