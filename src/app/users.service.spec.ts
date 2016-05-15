import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { UsersService } from './users.service';

describe('Users Service', () => {
  beforeEachProviders(() => [UsersService]);

  it('should ...',
      inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
