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

  constructor() {}

  ngOnInit() {
  }

}
