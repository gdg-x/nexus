import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent, GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { Router } from '@angular/router-deprecated';
import { MeetupService } from '../meetup.service';

@Component({
  moduleId: module.id,
  selector: 'app-chapter-map',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  templateUrl: 'chapter-map.component.html',
  styleUrls: ['chapter-map.component.css']
})
export class ChapterMapComponent implements OnInit {
  componentName: 'ChapterMapComponent';

  @Input() zoom = 2;
  @Input() lat = 23.5000002;
  @Input() lng = 7.9990339;
  @Input() markers = [];
  @Input() zoomCtrl = true;
  @Input() scrollwheel = true;

  constructor(private meetupService: MeetupService, private router: Router) {}

  ngOnInit() {}

  clickedMarker(label: string, index: number) {}

  mapClicked($event: MouseEvent) {}

  navigate(path: string) {
    this.meetupService.setUrlname(path);
    this.router.navigate(['Group About']);
  }
}
