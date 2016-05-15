import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-conduct',
  templateUrl: 'conduct.component.html',
  styleUrls: ['conduct.component.css'],
  directives: [
    MdToolbar
  ]
})
export class ConductComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
