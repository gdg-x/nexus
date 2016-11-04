import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupEventsService } from '../group-events.service';
import { GEvent, GAbout } from '../models';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-group-events',
  templateUrl: 'group-events.component.html',
  styleUrls: ['group-events.component.scss']
})
export class GroupEventsComponent implements OnInit {
  errorMessage: string;
  gevents: GEvent[];
  gabouts: GAbout[];
  imageUrl: string;

  constructor(private meetupService: MeetupService,
              private eventService: GroupEventsService,
              private router: Router) {
    this.imageUrl = 'https://lh4.googleusercontent.com/pRVBaFuv3DiGnWj7x9Z9XzToAMTopbEey1211-9mRUKBCAxVfbsuwQ=w1200-h400-p';
  }

  ngOnInit() {
    this.getEvents();
    this.getAbout();
  }

  getEvents() {
    this.eventService.getEvents()
    .subscribe(
      gevents => this.gevents = gevents,
      error => this.errorMessage = <any>error);
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
