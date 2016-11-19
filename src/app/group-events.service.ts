import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GEvent, GAbout } from './models';
import { environment } from '../environments/environment';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupEventsService {

  constructor(private jsonp: Jsonp) {}

  // TODO get groupName from router
  private meetupUrlStart = `https://api.meetup.com/`;
  private meetupUrlEnd = `/events?photo-host=public&page=20&sig_id=12889940&key=${environment.meetupKey}` +
                         `&sig=af9ff02c67f7b43d1cce0156799398f43842bc56&callback=JSONP_CALLBACK`;

  private aboutUrlStart = `https://api.meetup.com/2/groups?key=${environment.meetupKey}&offset=0&format=json&group_urlname=`;
  private aboutUrlEnd = `&photo-host=public&page=20&radius=25.0&fields=sponsors&order=id&desc=false` +
                        `&sig_id=12889940&sig=ece277cfc4be272311affb8a8ef00f812181d88a&callback=JSONP_CALLBACK`;

 getEvents(groupName: string): Observable<GEvent[]> {
    return this.jsonp.get(`${this.meetupUrlStart}${groupName}${this.meetupUrlEnd}`)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getAbout(groupName: string): Observable<GAbout[]> {
    return this.jsonp.get(`${this.aboutUrlStart}${groupName}${this.aboutUrlEnd}`)
    .map(this.extractResults)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    console.log(body);
    return body.data || {};

  }

  private extractResults(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    console.log(body);
    return body.results || {};

  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
