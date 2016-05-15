import { Component, OnInit } from '@angular/core';
import { ChapterMapComponent } from '../chapter-map';
import { Router, Routes, ROUTER_DIRECTIVES, OnActivate, RouteSegment } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { GroupEventsComponent } from '../+group-events';
import { GroupComponent } from '../+group';
import { GroupBlogComponent } from '../+group/+blog/group-blog.component';
import { GroupSponsorsComponent } from '../+group/+sponsors/group-sponsors.component';

@Component({
  moduleId: module.id,
  selector: 'app-groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
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
@Routes([
  {path: '/:urlname', component: GroupComponent},
  {path: '/:urlname', component: GroupComponent},
  {path: '/:urlname/events', component: GroupEventsComponent},
  {path: '/:urlname/blog', component: GroupBlogComponent},
  {path: '/:urlname/sponsors', component: GroupSponsorsComponent}
])
export class GroupsComponent implements OnInit, OnActivate {
  public zoom: number = 2;
  public lat: number = 23.5000002;
  public lng: number = 7.9990339;
  urlname: string;

  constructor(private router: Router) {}

  routerOnActivate(curr: RouteSegment): void {
    this.urlname = curr.getParam('urlname');
  }

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
