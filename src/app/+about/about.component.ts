import { Component, OnInit } from '@angular/core';
import { JSONP_PROVIDERS } from '@angular/http';
import { MeetupService } from '../meetup.service';
import { environment } from '../environment';
import { Topic } from '../topic';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  providers: [MeetupService, JSONP_PROVIDERS]
})
export class AboutComponent implements OnInit {
  meetupService: MeetupService;
  topic: Topic;
  errorMessage: string;

  constructor(meetupService: MeetupService) {
    this.meetupService = meetupService;
  }

  ngOnInit() {
    this.getTopic();
  }

  getTopic() {
    this.meetupService.getTopicDetails(environment.topicName)
    .subscribe(result => this.topic = <Topic>result, error =>  this.errorMessage = <any>error);
  }
}
