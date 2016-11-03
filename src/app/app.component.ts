import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nexus';
  navImageUrl: string;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    this.navImageUrl = environment.navImageUrl;
    if (window.location.hash === '') {
      this.router.navigate(['']);
    } else {
      this.router.navigate([window.location.hash]);
    }
  }
}
