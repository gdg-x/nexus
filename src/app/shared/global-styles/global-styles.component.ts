import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-styles',
  template: '',
  styleUrls: ['global-styles.component.scss'],
  encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component
})
export class GlobalStylesComponent {
  constructor() {}
}
