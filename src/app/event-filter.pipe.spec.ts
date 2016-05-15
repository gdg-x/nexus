import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { EventFilter } from './event-filter.pipe';

describe('EventFilter Pipe', () => {
  beforeEachProviders(() => [EventFilter]);

  it('should transform the input', inject([EventFilter], (pipe: EventFilter) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
