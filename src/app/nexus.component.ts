import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
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
  selector: 'nexus-app',
  templateUrl: 'nexus.component.html',
  styleUrls: ['nexus.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MD_LIST_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    MdIconRegistry,
    GroupEventsService,
    UsersService
  ]
})
@Routes([
  {path: '#!/about', component: AboutComponent},
  {path: '#!/groups', component: GroupsComponent},
  {path: '#!/group', component: GroupComponent},
  {path: '#!/goals', component: GoalsComponent},
  {path: '#!/benefits', component: BenefitsComponent},
  {path: '#!/conduct', component: ConductComponent},
  {path: '#!/group_events', component: GroupEventsComponent},
  {path: '#!/group_about', component: GroupAboutComponent},
  {path: '#!/group_sponsor', component: GroupSponsorComponent}
])
export class NexusAppComponent implements OnInit {
  title = 'Nexus';

  constructor(mdIconRegistry: MdIconRegistry, private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    if (window.location.hash === '') {
      this.router.navigate(['#!/about']);
    } else {
      this.router.navigate([window.location.hash]);
    }
  }
}
