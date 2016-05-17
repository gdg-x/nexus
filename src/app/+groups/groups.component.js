"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var chapter_map_1 = require('../chapter-map');
var meetup_service_1 = require('../meetup.service');
var environment_1 = require('../environment');
var GroupsComponent = (function () {
    function GroupsComponent(meetupService, router) {
        this.meetupService = meetupService;
        this.router = router;
        this.zoom = 2;
        this.lat = 23.5000002;
        this.lng = 7.9990339;
        this.scrollwheel = false;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.getTopic();
        this.getTopicGroups();
    };
    GroupsComponent.prototype.getTopic = function () {
        var _this = this;
        this.meetupService.getTopicDetails(environment_1.environment.topicName)
            .subscribe(function (result) {
            _this.topic = result;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    GroupsComponent.prototype.getTopicGroups = function () {
        var _this = this;
        this.meetupService.getGroups(environment_1.environment.topicName)
            .subscribe(function (result) {
            _this.mapMarkers = result;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    GroupsComponent.prototype.navigate = function (path) {
        this.meetupService.setUrlname(path);
        this.router.navigate(['#!/group_about']);
    };
    GroupsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-groups',
            templateUrl: 'groups.component.html',
            styleUrls: ['groups.component.css'],
            directives: [
                button_1.MdButton,
                icon_1.MdIcon,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                toolbar_1.MdToolbar,
                list_1.MD_LIST_DIRECTIVES,
                chapter_map_1.ChapterMapComponent
            ],
            providers: [
                icon_1.MdIconRegistry,
                meetup_service_1.MeetupService
            ]
        })
    ], GroupsComponent);
    return GroupsComponent;
}());
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map