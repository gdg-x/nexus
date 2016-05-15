import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GroupSponsorsComponent } from './group-sponsors.component';

describe('Component: Group Sponsors', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [GroupSponsorsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([GroupSponsorsComponent],
      (component: GroupSponsorsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(GroupSponsorsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(GroupSponsorsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <group-sponsors></group-sponsors>
  `,
  directives: [GroupSponsorsComponent]
})
class GroupSponsorsComponentTestController {
}

