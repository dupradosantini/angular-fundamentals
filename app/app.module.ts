import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

const routes: Routes = [
  { path: '', redirectTo: "passengers", pathMatch: 'full'}, //aumatically forwards to the passengers page.(redirection)
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports:[
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }), //adding hash to url, supports older browsers. The server has to support this location.
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule{}

