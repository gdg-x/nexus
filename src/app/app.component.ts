import { Component, OnInit } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { AboutComponent } from './+about';
import { GroupsComponent } from './+groups';
import { GroupComponent } from './+group';
import { GoalsComponent } from './+goals';
import { BenefitsComponent } from './+benefits';
import { ConductComponent } from './+conduct';
import { GroupEventsComponent } from './+group-events';
import { GroupEventsService } from './group-events.service';
import { GroupAboutComponent } from './+group-about';
import { GroupSponsorComponent } from './+group-sponsor';
import { UsersService } from './users.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MD_LIST_DIRECTIVES
  ],
  providers: [
    MdIconRegistry,
    GroupEventsService,
    UsersService
  ]
})
@RouteConfig([
  {path: '/about', component: AboutComponent, name: 'About', useAsDefault: true},
  {path: '/groups', component: GroupsComponent, name: 'Groups'},
  {path: '/group', component: GroupComponent, name: 'Group'},
  {path: '/goals', component: GoalsComponent, name: 'Goals'},
  {path: '/benefits', component: BenefitsComponent, name: 'Benefits'},
  {path: '/conduct', component: ConductComponent, name: 'Conduct'},
  {path: '/group_events', component: GroupEventsComponent, name: 'Group Events'},
  {path: '/group_about', component: GroupAboutComponent, name: 'Group About'},
  {path: '/group_sponsor', component: GroupSponsorComponent, name: 'Group Sponsor'},
  {path: '/**', redirectTo: ['About']}
])
export class AppComponent implements OnInit {
  title = 'Nexus';

  constructor(mdIconRegistry: MdIconRegistry, private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    if (window.location.hash === '') {
      this.router.navigate(['About']);
    } else {
      this.router.navigate([window.location.hash]);
    }
  }
}
