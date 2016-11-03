import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.scss']
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
