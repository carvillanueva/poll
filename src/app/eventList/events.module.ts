import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './events.component';



@NgModule({
  declarations: [
    EventListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EventListComponent
  ]
})
export class EventsPageModule { }
