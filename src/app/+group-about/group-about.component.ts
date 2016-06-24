import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { GroupEventsService } from '../group-events.service';
import { GAbout } from '../+group-events/gabout';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MeetupService } from '../meetup.service';

@Component({
  moduleId: module.id,
  selector: 'app-group-about',
  templateUrl: 'group-about.component.html',
  styleUrls: ['group-about.component.css'],
  providers: [MeetupService],
  directives: [MdToolbar, MD_CARD_DIRECTIVES]
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
