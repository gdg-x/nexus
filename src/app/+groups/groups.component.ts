import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
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
export class GroupsComponent implements OnInit {
  mapMarkers: MapMarker;
  topic: Topic;
  errorMessage: string;

  zoom: number = 2;
  lat: number = 23.5000002;
  lng: number = 7.9990339;
  scrollwheel: boolean = false;

  constructor(private meetupService: MeetupService, private router: Router) {}

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

  navigate(path: string) {
    this.meetupService.setUrlname(path);
    this.router.navigate(['#!/group_about']);
  }
}
