"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var meetup_service_1 = require('../meetup.service');
var GroupComponent = (function () {
    function GroupComponent(router, meetupService) {
        this.router = router;
        this.meetupService = meetupService;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.urlname = this.meetupService.getUrlname();
    };
    GroupComponent.prototype.navigate = function (path) {
        this.router.navigate([path]);
    };
    GroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-group',
            templateUrl: 'group.component.html',
            styleUrls: ['group.component.css'],
            directives: [
                button_1.MdButton,
                toolbar_1.MdToolbar
            ],
            providers: [
                meetup_service_1.MeetupService
            ]
        })
    ], GroupComponent);
    return GroupComponent;
}());
exports.GroupComponent = GroupComponent;
//# sourceMappingURL=group.component.js.map