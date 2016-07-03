import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthMethods, AuthProviders } from 'angularfire2';
import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent, [
    ROUTER_PROVIDERS,
    FIREBASE_PROVIDERS,
    JSONP_PROVIDERS,
    HTTP_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    GOOGLE_MAPS_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyDON32vspaLED4CQj1_cfqyV1aFG_1hyzE",
      authDomain: "gdg-nexus.firebaseapp.com",
      databaseURL: "https://gdg-nexus.firebaseio.com",
      storageBucket: "gdg-nexus.appspot.com"
    }),
    firebaseAuthConfig({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ]
);
