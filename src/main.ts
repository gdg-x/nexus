import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NexusAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthMethods, AuthProviders } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  NexusAppComponent, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://gdgnexus.firebaseio.com'),
    firebaseAuthConfig({
      method: AuthMethods.OAuthToken,
      provider: AuthProviders.Google
    })
  ]
);
