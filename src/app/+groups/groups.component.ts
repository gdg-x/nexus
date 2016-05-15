import { Component, OnInit } from '@angular/core';
import { ChapterMapComponent } from '../chapter-map';
import { Router } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.css'],
  directives: [
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MD_LIST_DIRECTIVES,
    ChapterMapComponent
  ],
  providers: [
    MdIconRegistry
  ]
})
export class GroupsComponent implements OnInit {
  public zoom: number = 2;
  public lat: number = 23.5000002;
  public lng: number = 7.9990339;

  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * Array of groups goes here using the below model
   * @type {{lat: number, lng: number, info: {chapter: string, link: string, city: string, country: string,
   *         urlname: string}}[]}
   */
  markers: Marker[] = [{
    lat: 38.9536,
    lng: -94.7336,
    info: {
      chapter: 'GDG Kansas City',
      link: 'http://www.meetup.com/GDG-Kansas-City/',
      city: 'Kansas City',
      country: 'USA',
      urlname: 'GDG-Kansas-City'
    }
  }];
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
  info?: any;
}
