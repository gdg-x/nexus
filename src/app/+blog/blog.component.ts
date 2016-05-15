import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {
  
  public posts: any[];
  public selectedpost: any;
  
 item: FirebaseObjectObservable<any>;
 
  constructor(af: AngularFire) {
    this.item = af.database.object('/blog');
  }
  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newName: string) {
    this.item.update({ name: newName  });
  }
  delete() {
    this.item.remove();
  }
  ngOnInit() {
    
  }

}
