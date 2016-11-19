import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { GroupEventsService } from '../group-events.service';
import { GEvent, GAbout } from '../models';

@Component({
  selector: 'app-group-events',
  templateUrl: 'group-events.component.html',
  styleUrls: ['group-events.component.scss']
})
export class GroupEventsComponent implements OnInit {
  errorMessage: string;
  gevents: GEvent[];
  gabout: GAbout;
  imageUrl: string;
  chapterName: string;

  constructor(private eventService: GroupEventsService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      this.chapterName = params['id'];
      console.log('Opening events for: ' + this.chapterName);
    });
    this.imageUrl = 'https://lh4.googleusercontent.com/pRVBaFuv3DiGnWj7x9Z9XzToAMTopbEey1211-9mRUKBCAxVfbsuwQ=w1200-h400-p';
  }

  ngOnInit() {
    this.getEvents();
    this.getAbout();
  }

  getEvents() {
    this.eventService.getEvents(this.chapterName)
    .subscribe(
      gevents => this.gevents = gevents,
      error => this.errorMessage = <any>error);
  }

  getAbout() {
    this.eventService.getAbout(this.chapterName)
    .subscribe(
      gabouts => {
        this.gabout = gabouts[0];
      },
      error => this.errorMessage = <any>error
    );
  }

  openEvents() {
    this.router.navigate([`groups/${this.chapterName}/events`]);
  }

  openAbout() {
    this.router.navigate([`groups/${this.chapterName}/about`]);
  }

  openSponsors() {
    this.router.navigate([`groups/${this.chapterName}/sponsors`]);
  }
}
