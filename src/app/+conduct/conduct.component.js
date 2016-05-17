"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var toolbar_1 = require('@angular2-material/toolbar');
var meetup_service_1 = require('../meetup.service');
var environment_1 = require('../environment');
var ConductComponent = (function () {
    function ConductComponent(meetupService) {
        this.meetupService = meetupService;
    }
    ConductComponent.prototype.ngOnInit = function () {
        this.getTopic();
    };
    ConductComponent.prototype.getTopic = function () {
        var _this = this;
        this.meetupService.getTopicDetails(environment_1.environment.topicName)
            .subscribe(function (result) {
            _this.topic = result;
            if (environment_1.environment.topicDescription) {
                _this.topic.description = environment_1.environment.topicDescription;
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ConductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-conduct',
            templateUrl: 'conduct.component.html',
            styleUrls: ['conduct.component.css'],
            directives: [
                toolbar_1.MdToolbar
            ],
            providers: [meetup_service_1.MeetupService]
        })
    ], ConductComponent);
    return ConductComponent;
}());
exports.ConductComponent = ConductComponent;
//# sourceMappingURL=conduct.component.js.map