import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../meetup.service';
import { environment } from '../../environments/environment';
import { Topic } from '../models';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {
  topic: Topic;
  errorMessage: string;
  promo: any;

  constructor(private meetupService: MeetupService) {
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
