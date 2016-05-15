import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, OnActivate, RouteSegment } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { GroupEventsComponent } from '../+group-events';
import { GroupComponent } from '../+group';
import { GroupBlogComponent } from '../+group/+blog/group-blog.component';
import { GroupSponsorsComponent } from '../+group/+sponsors/group-sponsors.component';
import { ChapterMapComponent } from '../chapter-map';
import { MapMarker } from '../map-marker';
import { MeetupService } from '../meetup.service';
import { environment } from '../environment';
import { Topic } from '../topic';

@Component({
  moduleId: module.id,
  selector: 'app-groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MD_LIST_DIRECTIVES,
    ChapterMapComponent
  ],
  providers: [
    MdIconRegistry,
    MeetupService
  ]
})
@Routes([
  {path: '/:urlname', component: GroupComponent},
  {path: '/:urlname', component: GroupComponent},
  {path: '/:urlname/events', component: GroupEventsComponent},
  {path: '/:urlname/blog', component: GroupBlogComponent},
  {path: '/:urlname/sponsors', component: GroupSponsorsComponent}
])
export class GroupsComponent implements OnInit {
  meetupService: MeetupService;
  mapMarkers: MapMarker;
  topic: Topic;
  errorMessage: string;
  urlname: string;
  
  zoom: number = 2;
  lat: number = 23.5000002;
  lng: number = 7.9990339;
  scrollwheel: boolean = false;

  constructor(meetupService: MeetupService, private router: Router) {
    this.meetupService = meetupService;
  }

  routerOnActivate(curr: RouteSegment): void {
    this.urlname = curr.getParam('urlname');
  }

  ngOnInit() {
    this.getTopic();
    this.getTopicGroups();
  }

  getTopic() {
    this.meetupService.getTopicDetails(environment.topicName)
    .subscribe(
      result => {
        this.topic = <Topic>result;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }

  getTopicGroups() {
    this.meetupService.getGroups(environment.topicName)
    .subscribe(
      result => {
        this.mapMarkers = <MapMarker>result;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }
}
