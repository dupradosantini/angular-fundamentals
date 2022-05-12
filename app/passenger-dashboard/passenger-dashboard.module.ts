import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Http, HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

//containers (smart).
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//components.
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";
//services
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    // Container components.
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // Generic components
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports:[
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})

export class PassengerDashboardModule{}
