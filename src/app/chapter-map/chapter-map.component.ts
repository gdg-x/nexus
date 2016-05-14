import { Component, OnInit } from '@angular/core';
import { ANGULAR2_GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'app-chapter-map',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  templateUrl: 'chapter-map.component.html',
  styleUrls: ['chapter-map.component.css']
})

export class ChapterMapComponent implements OnInit {
  componentName: 'ChapterMapComponent';
  
  /* global default */
  zoom: number = 3;
  lat: number = 23.5000002;
  lng: number = 7.9990339;

  constructor() {}

  ngOnInit() {
  }

}
