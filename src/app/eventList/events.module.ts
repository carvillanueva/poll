import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EviteComponent } from './evite.component';
import { PollsComponent } from './polls.component';



@NgModule({
  declarations: [
    EviteComponent,
    PollsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EviteComponent,
    PollsComponent
  ]
})
export class EventsPageModule { }
