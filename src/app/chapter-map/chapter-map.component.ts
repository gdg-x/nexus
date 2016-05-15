import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent, ANGULAR2_GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-chapter-map',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
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

  constructor(private router: Router) {}

  ngOnInit() {}

  public navigate(path: string) {
    console.log('Navigating to ' + `#!/groups/${path}`);
    this.router.navigate(['#!/groups', path]);
  }

  clickedMarker(label: string, index: number) {}

  mapClicked($event: MouseEvent) {}
}
