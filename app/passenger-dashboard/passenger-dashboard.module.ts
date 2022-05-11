import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Http, HttpModule } from "@angular/http";

//containers (smart).
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//components.
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

//services
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports:[
    CommonModule,
    HttpModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})

export class PassengerDashboardModule{}
