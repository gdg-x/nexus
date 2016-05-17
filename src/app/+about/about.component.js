"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var progress_circle_1 = require('@angular2-material/progress-circle');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var meetup_service_1 = require('../meetup.service');
var environment_1 = require('../environment');
var AboutComponent = (function () {
    function AboutComponent(meetupService) {
        this.meetupService = meetupService;
        this.promo = environment_1.environment.promo;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.getTopic();
    };
    AboutComponent.prototype.getTopic = function () {
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
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.css'],
            providers: [meetup_service_1.MeetupService],
            directives: [progress_circle_1.MdProgressCircle, progress_circle_1.MdSpinner, toolbar_1.MdToolbar, card_1.MD_CARD_DIRECTIVES, button_1.MdButton]
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map