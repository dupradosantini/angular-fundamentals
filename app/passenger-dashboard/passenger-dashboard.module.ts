import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Http, HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

//containers (smart).
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//components.
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";
//services
import { PassengerDashboardService } from "./passenger-dashboard.service";

const routes: Routes = [
  {
    path: 'passengers',
    component: PassengerDashboardComponent
  }
];
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
    FormsModule,
    RouterModule.forChild(routes)
  ],
  //Exports not needed anymore, the routing does that.
  providers: [
    PassengerDashboardService
  ]
})

export class PassengerDashboardModule{}
