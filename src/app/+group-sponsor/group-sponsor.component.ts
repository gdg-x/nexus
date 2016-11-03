import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupEventsService } from '../group-events.service';
import { GAbout } from '../models';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-group-sponsor',
  templateUrl: 'group-sponsor.component.html',
  styleUrls: ['group-sponsor.component.scss']
})
export class GroupSponsorComponent implements OnInit {
  errorMessage: string;
  gabouts: GAbout[];

  constructor(private meetupService: MeetupService,
              private eventService: GroupEventsService,
              private router: Router) {}

  ngOnInit() {
    this.getSponsors();
  }

  getSponsors() {
    this.eventService.getAbout()
    .subscribe(
      gabouts => this.gabouts = gabouts,
      error => this.errorMessage = <any>error);
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
