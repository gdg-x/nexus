import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MeetupService } from '../meetup.service';

@Component({
  moduleId: module.id,
  selector: 'app-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.css'],
  directives: [
    MdButton,
    MdToolbar
  ],
  providers: [
    MeetupService
  ]
})
export class GroupComponent implements OnInit {
  urlname: string;

  constructor(private router: Router, private meetupService: MeetupService) {}

  ngOnInit() {
    this.urlname = this.meetupService.getUrlname();
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
