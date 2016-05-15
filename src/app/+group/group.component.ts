import { Component, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.css']
})
export class GroupComponent implements OnInit, OnActivate {
  urlname: string;
  constructor(private router: Router) {}

  routerOnActivate(curr: RouteSegment): void {
    this.urlname = curr.getParam('urlname');
  }

  ngOnInit() {}

  navigate(path: string) {
    this.router.navigateByUrl( `/${this.urlname}` + path);
  }
}
