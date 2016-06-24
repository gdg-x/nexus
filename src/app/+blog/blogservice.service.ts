import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

export class BlogserviceService {

  blog: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
  this.blog = af.database.object('/blog');
  }

  getallposts(){

  }

  getpostbyid(){

  }
}
