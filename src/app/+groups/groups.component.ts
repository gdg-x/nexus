import { Component, OnInit } from '@angular/core';
import { ChapterMapComponent } from '../chapter-map';

@Component({
  moduleId: module.id,
  selector: 'app-groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.css'],
  directives: [ChapterMapComponent]
})

export class GroupsComponent implements OnInit {
  public zoom:number = 2;
  public lat:number = 23.5000002;
  public lng:number = 7.9990339;
  
  /*
  
  Array of groups goes here using the below model
  
  */
  
  markers: marker[] = [{
    lat: 38.9536,
    lng: -94.7336,
    info: {
      chapter: 'GDG Kansas City',
      link: 'http://www.meetup.com/GDG-Kansas-City/',
      city: 'Kansas City',
      country: 'USA'
    }
  }];

  constructor() {}

  ngOnInit() {
  }

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
  info?: any;
}
