import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NexusAppComponent } from '../app/nexus.component';

beforeEachProviders(() => [NexusAppComponent]);

describe('App: Nexus', () => {
  it('should create the app',
      inject([NexusAppComponent], (app: NexusAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'nexus works!\'',
      inject([NexusAppComponent], (app: NexusAppComponent) => {
    expect(app.title).toEqual('nexus works!');
  }));
});
