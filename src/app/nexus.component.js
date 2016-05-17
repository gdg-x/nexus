"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var _about_1 = require('./+about');
var _groups_1 = require('./+groups');
var _group_1 = require('./+group');
var _goals_1 = require('./+goals');
var _benefits_1 = require('./+benefits');
var _conduct_1 = require('./+conduct');
var _group_events_1 = require('./+group-events');
var group_events_service_1 = require('./group-events.service');
var _group_about_1 = require('./+group-about');
var _group_sponsor_1 = require('./+group-sponsor');
var users_service_1 = require('./users.service');
var NexusAppComponent = (function () {
    function NexusAppComponent(mdIconRegistry, router, usersService) {
        this.router = router;
        this.usersService = usersService;
        this.title = 'Nexus';
    }
    NexusAppComponent.prototype.ngOnInit = function () {
        if (window.location.hash === '') {
            this.router.navigate(['#!/about']);
        }
        else {
            this.router.navigate([window.location.hash]);
        }
    };
    NexusAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nexus-app',
            templateUrl: 'nexus.component.html',
            styleUrls: ['nexus.component.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                button_1.MdButton,
                icon_1.MdIcon,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                toolbar_1.MdToolbar,
                list_1.MD_LIST_DIRECTIVES
            ],
            providers: [
                router_1.ROUTER_PROVIDERS,
                icon_1.MdIconRegistry,
                group_events_service_1.GroupEventsService,
                users_service_1.UsersService
            ]
        }),
        router_1.Routes([
            { path: '#!/about', component: _about_1.AboutComponent },
            { path: '#!/groups', component: _groups_1.GroupsComponent },
            { path: '#!/group', component: _group_1.GroupComponent },
            { path: '#!/goals', component: _goals_1.GoalsComponent },
            { path: '#!/benefits', component: _benefits_1.BenefitsComponent },
            { path: '#!/conduct', component: _conduct_1.ConductComponent },
            { path: '#!/group_events', component: _group_events_1.GroupEventsComponent },
            { path: '#!/group_about', component: _group_about_1.GroupAboutComponent },
            { path: '#!/group_sponsor', component: _group_sponsor_1.GroupSponsorComponent }
        ])
    ], NexusAppComponent);
    return NexusAppComponent;
}());
exports.NexusAppComponent = NexusAppComponent;
//# sourceMappingURL=nexus.component.js.map