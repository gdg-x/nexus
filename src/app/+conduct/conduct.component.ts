import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MeetupService } from '../meetup.service';
import { environment } from '../environment';
import { Topic } from '../topic';

@Component({
  moduleId: module.id,
  selector: 'app-conduct',
  templateUrl: 'conduct.component.html',
  styleUrls: ['conduct.component.css'],
  directives: [
    MdToolbar
  ],
  providers: [MeetupService]
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
