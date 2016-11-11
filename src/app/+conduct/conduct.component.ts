import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../meetup.service';
import { environment } from '../../environments/environment';
import { Topic } from '../models';

@Component({
  selector: 'app-conduct',
  templateUrl: 'conduct.component.html',
  styleUrls: ['conduct.component.scss']
})
export class ConductComponent implements OnInit {
  topic: Topic;
  errorMessage: string;

  constructor(private meetupService: MeetupService) {}

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
