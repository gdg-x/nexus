import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapMarker } from '../models/map-marker';
import { MeetupService } from '../meetup.service';
import { environment } from '../../environments/environment';
import { Topic } from '../models';

@Component({
  selector: 'app-groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.scss']
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
    this.router.navigate(['Group About']);
  }
}
