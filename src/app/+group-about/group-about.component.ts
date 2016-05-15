import { Component, OnInit } from '@angular/core';
import { GroupEventsService } from '../group-events.service';
import { JSONP_PROVIDERS } from '@angular/http';
import { GEvent } from '../+group-events/gevent';
import { GAbout } from '../+group-events/gabout';


@Component({
  moduleId: module.id,
  selector: 'app-group-about',
  templateUrl: 'group-about.component.html',
  styleUrls: ['group-about.component.css'],
  providers: [JSONP_PROVIDERS]
})
export class GroupAboutComponent implements OnInit {
  
  errorMessage: string;
  gabouts: GAbout[];

  constructor(private eventService: GroupEventsService) {}

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this.eventService.getAbout()
    .subscribe(
      gabouts => this.gabouts = gabouts,
      error => this.errorMessage = <any>error);
  }

}
