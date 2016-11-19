import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
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
  gabout: GAbout;
  chapterName: string;

  constructor(private eventService: GroupEventsService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      this.chapterName = params['id'];
      console.log('Opening events for: ' + this.chapterName);
    });
  }

  ngOnInit() {
    this.getSponsors();
  }

  getSponsors() {
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
