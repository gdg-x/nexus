import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './+about/about.component';
import {GroupsComponent} from './+groups/groups.component';
import {GroupComponent} from './+group/group.component';
import {GoalsComponent} from './+goals/goals.component';
import {BenefitsComponent} from './+benefits/benefits.component';
import {ConductComponent} from './+conduct/conduct.component';
import {GroupEventsComponent} from './+group-events/group-events.component';
import {GroupAboutComponent} from './+group-about/group-about.component';
import {GroupSponsorComponent} from './+group-sponsor/group-sponsor.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'benefits', component: BenefitsComponent},
  {path: 'conduct', component: ConductComponent},
  {path: 'group', component: GroupComponent},
  {path: 'group_events', component: GroupEventsComponent},
  {path: 'group_about', component: GroupAboutComponent},
  {path: 'group_sponsor', component: GroupSponsorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
