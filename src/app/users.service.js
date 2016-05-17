"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var UsersService = (function () {
    function UsersService(af) {
        this.af = af;
        this.isLoggedIn = (false);
    }
    UsersService.prototype.login = function () {
        var _this = this;
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Popup
        }).then(function (authData) {
            console.log(authData);
            _this.isLoggedIn = true;
            // adding the authData to Firebase
            var itemObservable = _this.af.database.list('/users');
            console.log(itemObservable);
            itemObservable.push({ provider: authData.auth['provider'],
                image: authData.google['profileImageURL'],
                name: authData.google['displayName'],
                token: authData.google['accessToken'],
                uid: authData['uid'] });
        });
    };
    UsersService.prototype.logout = function () {
        this.af.auth.logout();
        this.isLoggedIn = false;
    };
    UsersService = __decorate([
        core_1.Injectable()
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map