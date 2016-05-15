import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GEvent } from './+group-events/gevent';

@Injectable()
export class GroupEventsService {
  groupName: string = 'GDG-Chicago-West';

  constructor(private jsonp: Jsonp) {}

  // TODO get groupName from router
  private meetupUrl = 'https://api.meetup.com/' + this.groupName + '/events' +
                       '?photo-host=public&page=20&sig_id=12889940&' +
                       'sig=af9ff02c67f7b43d1cce0156799398f43842bc56&callback=JSONP_CALLBACK';

  getEvents(): Observable<GEvent[]> {
    return this.jsonp.get(this.meetupUrl)
    .map(this.extractData)
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

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
