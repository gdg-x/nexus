"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var ChapterMapComponent = (function () {
    function ChapterMapComponent(meetupService, router) {
        this.meetupService = meetupService;
        this.router = router;
        this.zoom = 2;
        this.lat = 23.5000002;
        this.lng = 7.9990339;
        this.markers = [];
        this.zoomCtrl = true;
        this.scrollwheel = true;
    }
    ChapterMapComponent.prototype.ngOnInit = function () { };
    ChapterMapComponent.prototype.clickedMarker = function (label, index) { };
    ChapterMapComponent.prototype.mapClicked = function ($event) { };
    ChapterMapComponent.prototype.navigate = function (path) {
        this.meetupService.setUrlname(path);
        this.router.navigate(['#!/group_about']);
    };
    __decorate([
        core_1.Input()
    ], ChapterMapComponent.prototype, "zoom");
    __decorate([
        core_1.Input()
    ], ChapterMapComponent.prototype, "lat");
    __decorate([
        core_1.Input()
    ], ChapterMapComponent.prototype, "lng");
    __decorate([
        core_1.Input()
    ], ChapterMapComponent.prototype, "markers");
    __decorate([
        core_1.Input()
    ], ChapterMapComponent.prototype, "zoomCtrl");
    __decorate([
        core_1.Input()
    ], ChapterMapComponent.prototype, "scrollwheel");
    ChapterMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-chapter-map',
            directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
            templateUrl: 'chapter-map.component.html',
            styleUrls: ['chapter-map.component.css']
        })
    ], ChapterMapComponent);
    return ChapterMapComponent;
}());
exports.ChapterMapComponent = ChapterMapComponent;
//# sourceMappingURL=chapter-map.component.js.map