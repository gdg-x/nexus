import { Component, OnInit } from '@angular/core';
import { JSONP_PROVIDERS } from '@angular/http';
import { ChapterMapComponent } from '../chapter-map';
import { MapMarker } from '../map-marker';
import { MeetupService } from '../meetup.service';
import { environment } from '../environment';

@Component({
  moduleId: module.id,
  selector: 'app-groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.css'],
  providers: [MeetupService, JSONP_PROVIDERS],
  directives: [ChapterMapComponent]
})
export class GroupsComponent implements OnInit {
  meetupService: MeetupService;
  mapMarkers: MapMarker;
  errorMessage: string;
  
  zoom: number = 2;
  lat: number = 23.5000002;
  lng: number = 7.9990339;
  scrollwheel: boolean = false;

  constructor(meetupService: MeetupService) {
    this.meetupService = meetupService;
  }

  ngOnInit() {
    this.getTopicGroups();
  }

  getTopicGroups() {
    this.meetupService.getTopicGroups(environment.topicName)
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
