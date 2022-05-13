import { ComponentRef_ } from "@angular/compiler/src/private_import_core";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template:`
  <div>
    Not Found, <a routerLink="/">go home?</a>
  </div>
  `
})
export class NotFoundComponent{
}
