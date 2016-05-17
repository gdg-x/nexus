"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var toolbar_1 = require('@angular2-material/toolbar');
var card_1 = require('@angular2-material/card');
var meetup_service_1 = require('../meetup.service');
var GroupAboutComponent = (function () {
    function GroupAboutComponent(meetupService, eventService, router) {
        this.meetupService = meetupService;
        this.eventService = eventService;
        this.router = router;
    }
    GroupAboutComponent.prototype.ngOnInit = function () {
        this.urlname = this.meetupService.getUrlname();
        console.log('Opening group with urlname: ' + this.urlname);
        this.getAbout();
    };
    GroupAboutComponent.prototype.getAbout = function () {
        var _this = this;
        this.eventService.getAbout()
            .subscribe(function (gabouts) { return _this.gabouts = gabouts; }, function (error) { return _this.errorMessage = error; });
    };
    GroupAboutComponent.prototype.navigate = function (path) {
        this.router.navigate(['#!/' + path]);
    };
    GroupAboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-group-about',
            templateUrl: 'group-about.component.html',
            styleUrls: ['group-about.component.css'],
            providers: [meetup_service_1.MeetupService],
            directives: [toolbar_1.MdToolbar, card_1.MD_CARD_DIRECTIVES]
        })
    ], GroupAboutComponent);
    return GroupAboutComponent;
}());
exports.GroupAboutComponent = GroupAboutComponent;
//# sourceMappingURL=group-about.component.js.map