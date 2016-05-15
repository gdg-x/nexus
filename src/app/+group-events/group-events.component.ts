import { Component, OnInit } from '@angular/core';
import { GroupEventsService } from '../group-events.service';
import { GEvent } from './gevent';
import { JSONP_PROVIDERS } from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-group-events',
  templateUrl: 'group-events.component.html',
  styleUrls: ['group-events.component.css'],
  providers: [JSONP_PROVIDERS],
  directives: [MD_CARD_DIRECTIVES]

})
export class GroupEventsComponent implements OnInit {
  errorMessage: string;
  gevents: GEvent[];

  constructor(private eventService: GroupEventsService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents()
    .subscribe(
      gevents => this.gevents = gevents,
      error => this.errorMessage = <any>error);
  }
}
