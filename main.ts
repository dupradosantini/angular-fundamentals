import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //for browser apps compilation

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/* We have the app component, called app-root, which gets placed in our HTML
   To bootstrap this app-root, we need to import the component, register ir in a module, tell the module to
   bootstrap the component and in the main typescript file (here) we tell the compiler to bootstrap our appModule*/
