import { Component, OnInit } from '@angular/core';
import { GroupEventsService } from '../group-events.service';
import { JSONP_PROVIDERS } from '@angular/http';
import { GAbout } from '../+group-events/gabout';

@Component({
  moduleId: module.id,
  selector: 'app-group-sponsor',
  templateUrl: 'group-sponsor.component.html',
  styleUrls: ['group-sponsor.component.css']
})
export class GroupSponsorComponent implements OnInit {

  errorMessage: string;
  gabouts: GAbout[];

  constructor(private eventService: GroupEventsService) {}

  ngOnInit() {
    this.getSponsors();
  }

  getSponsors() {
    this.eventService.getAbout()
    .subscribe(
      gabouts => this.gabouts = gabouts,
      error => this.errorMessage = <any>error);
  }

}
