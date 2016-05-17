"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var _1 = require('./app/');
var angularfire2_1 = require('angularfire2');
var core_2 = require('angular2-google-maps/core');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.NexusAppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.JSONP_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase('https://gdgnexus.firebaseio.com'),
    angularfire2_1.firebaseAuthConfig({
        method: angularfire2_1.AuthMethods.OAuthToken,
        provider: angularfire2_1.AuthProviders.Google
    }),
    core_2.ANGULAR2_GOOGLE_MAPS_PROVIDERS
]);
//# sourceMappingURL=main.js.map