import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupEventsService } from '../group-events.service';
import { GAbout } from '../models';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-group-about',
  templateUrl: 'group-about.component.html',
  styleUrls: ['group-about.component.scss']
})
export class GroupAboutComponent implements OnInit {
  errorMessage: string;
  gabouts: GAbout[];
  urlname: string;

  constructor(private meetupService: MeetupService,
              private eventService: GroupEventsService,
              private router: Router) {}

  ngOnInit() {
    this.urlname = this.meetupService.getUrlname();
    console.log('Opening group with urlname: ' + this.urlname);
    this.getAbout();
  }

  getAbout() {
    this.eventService.getAbout()
    .subscribe(
      gabouts => this.gabouts = gabouts,
      error => this.errorMessage = <any>error);
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
