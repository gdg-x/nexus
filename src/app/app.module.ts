import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {PolymerElement} from '@vaadin/angular2-polymer';
import {MaterialModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';
import {GlobalStylesComponent} from './shared/global-styles/global-styles.component';
import {environment} from '../environments/environment';
import {UsersService} from './users.service';
import {GroupEventsService} from './group-events.service';
import {BlogService} from './blog.service';
import {MeetupService} from './meetup.service';

import {AppComponent} from './app.component';
import {AboutComponent} from './+about/about.component';
import {BenefitsComponent} from './+benefits/benefits.component';
import {GoalsComponent} from './+goals/goals.component';
import {ConductComponent} from './+conduct/conduct.component';
import {BlogComponent} from './+blog/blog.component';
import {GroupsComponent} from './+groups/groups.component';
import {GroupSponsorComponent} from './+group-sponsor/group-sponsor.component';
import {GroupEventsComponent} from './+group-events/group-events.component';
import {GroupAboutComponent} from './+group-about/group-about.component';
import {ChapterMapComponent} from './chapter-map/chapter-map.component';

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    PolymerElement('app-header'),
    PolymerElement('app-toolbar'),
    PolymerElement('iron-icon'),
    PolymerElement('iron-image'),
    PolymerElement('iron-media-query'),
    PolymerElement('paper-button'),
    PolymerElement('paper-card'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-icon-item'),
    AboutComponent,
    BenefitsComponent,
    BlogComponent,
    ConductComponent,
    GoalsComponent,
    GroupAboutComponent,
    GroupEventsComponent,
    GroupSponsorComponent,
    GroupsComponent,
    ChapterMapComponent,
    GlobalStylesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    UsersService,
    MeetupService,
    GroupEventsService,
    BlogService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
