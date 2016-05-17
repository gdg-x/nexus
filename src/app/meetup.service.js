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
var MeetupService = (function () {
    function MeetupService(jsonp) {
        this.jsonp = jsonp;
        this.baseUrl = 'https://api.meetup.com/';
    }
    MeetupService.prototype.setUrlname = function (urlname) {
        console.log('urlname: ' + urlname);
        this.urlname = urlname;
    };
    MeetupService.prototype.getUrlname = function () {
        console.log('Returning urlname: ' + this.urlname);
        return this.urlname;
    };
    MeetupService.prototype.getTopicDetails = function (topicName) {
        return this.jsonp.get(this.baseUrl + 'topics?name=' + topicName + '&key=' + environment_1.environment.meetupKey +
            '&format=json&offset=0&sign=true&photo-host=public&order=members&page=1' +
            '&sig_id=90953272&sig=be90771761c0e0fb85d14b9c39f3c5d772cfb721&callback=JSONP_CALLBACK')
            .map(this.handleTopicData)
            .catch(this.handleError);
    };
    MeetupService.prototype.getGroups = function (topicName) {
        return this.jsonp.get(this.baseUrl + '2/groups?topic=' + topicName + '&key=' + environment_1.environment.meetupKey +
            '&format=json&offset=0&sign=true&photo-host=public&order=id&desc=false' +
            '&sig_id=90953272&sig=be90771761c0e0fb85d14b9c39f3c5d772cfb721&callback=JSONP_CALLBACK')
            .map(this.handleGroupsData)
            .catch(this.handleError);
    };
    MeetupService.prototype.handleTopicData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        return res.json().results[0] || {};
    };
    MeetupService.prototype.handleGroupsData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        var markers = [];
        for (var i = 0; i < res.json().results.length; i++) {
            markers.push({
                lat: res.json().results[i].lat,
                lng: res.json().results[i].lon,
                link: res.json().results[i].urlname,
                chapter: res.json().results[i].name,
                members: res.json().results[i].members,
                city: res.json().results[i].city,
                country: res.json().results[i].country,
                meetupLink: res.json().results[i].link
            });
        }
        // sort by country then chapter name
        markers.sort(function (a, b) {
            var cA = a.country.toLowerCase(), cb = b.country.toLowerCase(), chA = a.chapter.toLowerCase(), chB = b.chapter.toLowerCase();
            if (cA < cb) {
                return -1;
            }
            if (cA > cb) {
                return 1;
            }
            if (chA < chB) {
                return -1;
            }
            if (chA > chB) {
                return 1;
            }
            return 0;
        });
        return markers || {};
    };
    MeetupService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    MeetupService = __decorate([
        core_1.Injectable()
    ], MeetupService);
    return MeetupService;
}());
exports.MeetupService = MeetupService;
//# sourceMappingURL=meetup.service.js.map