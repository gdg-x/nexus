import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NexusAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthMethods, AuthProviders } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  NexusAppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    FIREBASE_PROVIDERS,
    defaultFirebase('https://gdgnexus.firebaseio.com'),
    firebaseAuthConfig({
      method: AuthMethods.OAuthToken,
      provider: AuthProviders.Google
    })
  ]
);
