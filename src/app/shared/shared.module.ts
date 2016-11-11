import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventFilter} from './pipes/event-filter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EventFilter],
  exports: [
    EventFilter, CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class SharedModule {}
