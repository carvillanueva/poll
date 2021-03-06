import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EviteComponent } from './evite.component';
import { FormsModule } from '@angular/forms';
import { EviteCardComponent } from './eviteCard.component';
import { EviteResponseComponent } from './eviteResponse.component';
import { EviteShareComponent } from './eviteShare.component';


@NgModule({
  declarations: [
    EviteComponent,
    EviteCardComponent,
    EviteResponseComponent,
    EviteShareComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    EviteComponent,
    EviteCardComponent,
    EviteResponseComponent,
    EviteShareComponent
  ]
})
export class EventsPageModule { }
