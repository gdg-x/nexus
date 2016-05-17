"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var card_1 = require('@angular2-material/card');
var event_filter_pipe_1 = require('../event-filter.pipe');
var meetup_service_1 = require('../meetup.service');
var GroupEventsComponent = (function () {
    function GroupEventsComponent(meetupService, eventService, router) {
        this.meetupService = meetupService;
        this.eventService = eventService;
        this.router = router;
    }
    GroupEventsComponent.prototype.ngOnInit = function () {
        this.getEvents();
        this.getAbout();
    };
    GroupEventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents()
            .subscribe(function (gevents) { return _this.gevents = gevents; }, function (error) { return _this.errorMessage = error; });
    };
    GroupEventsComponent.prototype.getAbout = function () {
        var _this = this;
        this.eventService.getAbout()
            .subscribe(function (gabouts) { return _this.gabouts = gabouts; }, function (error) { return _this.errorMessage = error; });
    };
    GroupEventsComponent.prototype.navigate = function (path) {
        this.router.navigate(['#!/' + path]);
    };
    GroupEventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-group-events',
            templateUrl: 'group-events.component.html',
            styleUrls: ['group-events.component.css'],
            providers: [meetup_service_1.MeetupService],
            directives: [card_1.MD_CARD_DIRECTIVES],
            pipes: [event_filter_pipe_1.EventFilter]
        })
    ], GroupEventsComponent);
    return GroupEventsComponent;
}());
exports.GroupEventsComponent = GroupEventsComponent;
//# sourceMappingURL=group-events.component.js.map