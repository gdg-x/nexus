import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AboutComponent } from './+about';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'nexus-app',
  templateUrl: 'nexus.component.html',
  styleUrls: ['nexus.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MD_LIST_DIRECTIVES
  ],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MdIconRegistry]
})
@Routes([
  {path: '/about', component: AboutComponent}
])
export class NexusAppComponent {
  title = 'Angular Nexus';

  constructor(mdIconRegistry: MdIconRegistry) {}
}
