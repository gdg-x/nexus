import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { GroupEventsService } from '../group-events.service';
import { GAbout } from '../models';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-group-about',
  templateUrl: 'group-about.component.html',
  styleUrls: ['group-about.component.scss']
})
export class GroupAboutComponent implements OnInit {
  errorMessage: string;
  gabout: GAbout;
  description: SafeHtml;
  chapterName: string;

  constructor(private eventService: GroupEventsService,
              private router: Router,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
    route.params.subscribe((params: Params) => {
      this.chapterName = params['id'];
      console.log('Opening about for: ' + this.chapterName);
    });
  }

  ngOnInit() {
    this.getAbout(this.chapterName);
  }

  getAbout(chapterName: string) {
    this.eventService.getAbout(chapterName)
    .subscribe(
      gabouts => {
          this.gabout = gabouts[0];
          this.description = this.sanitizer.bypassSecurityTrustHtml(this.gabout.description);
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
