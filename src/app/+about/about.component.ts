import { Component, OnInit } from '@angular/core';
import { JSONP_PROVIDERS } from '@angular/http';
import { MdProgressCircle, MdSpinner } from '@angular2-material/progress-circle';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MeetupService } from '../meetup.service';
import { environment } from '../environment';
import { Topic } from '../topic';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  providers: [MeetupService, JSONP_PROVIDERS],
  directives: [MdProgressCircle, MdSpinner, MdToolbar, MD_CARD_DIRECTIVES, MdButton]
})
export class AboutComponent implements OnInit {
  meetupService: MeetupService;
  topic: Topic;
  errorMessage: string;
  promo: any;

  constructor(meetupService: MeetupService) {
    this.meetupService = meetupService;
    this.promo = environment.promo;
  }

  ngOnInit() {
    this.getTopic();
  }

  getTopic() {
    this.meetupService.getTopicDetails(environment.topicName)
    .subscribe(
      result => {
        this.topic = <Topic>result;
        if (environment.topicDescription) {
          this.topic.description = environment.topicDescription;
        }
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }
}
