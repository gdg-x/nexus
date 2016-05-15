import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, OnActivate, Router, RouteSegment } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { GroupEventsComponent } from '../+group-events';
import { GroupDetailsComponent } from '../+group/+about/group-details.component';
import { GroupBlogComponent } from '../+group/+blog/group-blog.component';
import { GroupSponsorsComponent } from '../+group/+sponsors/group-sponsors.component';

@Component({
  moduleId: module.id,
  selector: 'app-group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdToolbar
  ]
})
@Routes([
  {path: './:urlname', component: GroupDetailsComponent},
  {path: './:urlname/about', component: GroupDetailsComponent},
  {path: './:urlname/events', component: GroupEventsComponent},
  {path: './:urlname/blog', component: GroupBlogComponent},
  {path: './:urlname/sponsors', component: GroupSponsorsComponent}
])
export class GroupComponent implements OnInit, OnActivate {
  urlname: string;
  currentSegment: RouteSegment;

  constructor(private router: Router) {}

  routerOnActivate(curr: RouteSegment): void {
    this.urlname = curr.getParam('urlname');
    console.log(this.urlname);
    this.currentSegment = curr;
    console.log(this.currentSegment);
  }

  ngOnInit() {}

  navigate(path: string) {
    // this.router.navigateByUrl( `./${this.urlname}` + path);
    // Relative link
    this.router.navigate([`./${this.urlname}/` + path], this.currentSegment);
  }
}
