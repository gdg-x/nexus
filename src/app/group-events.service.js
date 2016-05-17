"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var environment_1 = require('./environment');
var GroupEventsService = (function () {
    function GroupEventsService(jsonp) {
        this.jsonp = jsonp;
        this.groupName = 'GDG-Kansas-City';
        // TODO get groupName from router
        this.meetupUrl = 'https://api.meetup.com/' + this.groupName + '/events' +
            '?photo-host=public&page=20&sig_id=12889940&key=' + environment_1.environment.meetupKey +
            '&sig=af9ff02c67f7b43d1cce0156799398f43842bc56&callback=JSONP_CALLBACK';
        this.aboutUrl = 'https://api.meetup.com/2/groups?key=' + environment_1.environment.meetupKey +
            '&offset=0&format=json&group_urlname=' + this.groupName +
            '&photo-host=public&page=20&radius=25.0&fields=sponsors&order=id&desc=false' +
            '&sig_id=12889940&sig=ece277cfc4be272311affb8a8ef00f812181d88a&callback=JSONP_CALLBACK';
    }
    GroupEventsService.prototype.getEvents = function () {
        return this.jsonp.get(this.meetupUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GroupEventsService.prototype.getAbout = function () {
        return this.jsonp.get(this.aboutUrl)
            .map(this.extractResults)
            .catch(this.handleError);
    };
    GroupEventsService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var body = res.json();
        console.log(body);
        return body.data || {};
    };
    GroupEventsService.prototype.extractResults = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var body = res.json();
        console.log(body);
        return body.results || {};
    };
    GroupEventsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    GroupEventsService = __decorate([
        core_1.Injectable()
    ], GroupEventsService);
    return GroupEventsService;
}());
exports.GroupEventsService = GroupEventsService;
//# sourceMappingURL=group-events.service.js.map