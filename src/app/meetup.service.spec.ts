import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MeetupService } from './meetup.service';

describe('Meetup Service', () => {
  beforeEachProviders(() => [MeetupService]);

  it('should ...',
      inject([MeetupService], (service: MeetupService) => {
    expect(service).toBeTruthy();
  }));
});
