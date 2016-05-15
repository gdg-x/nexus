import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GEvent }            from './+group-events/gevent';
import { Jsonp }            from '@angular/http';

@Injectable()
export class GroupEventsService {

  constructor(private jsonp: Jsonp) {}
  
  private MeetupUrl = 'https://api.meetup.com/GDG-Chicago-West/events?photo-host=public&page=20&sig_id=12889940&sig=af9ff02c67f7b43d1cce0156799398f43842bc56&callback=JSONP_CALLBACK'; 
  
  getEvents (): Observable<GEvent[]> {
    return this.jsonp.get(this.MeetupUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    console.log(body);
    return body.data || { };
   
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
