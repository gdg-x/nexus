import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class BlogService {

  blog: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.blog = af.database.object('/blog');
  }

  getallposts() {}

  getpostbyid() {}
}
