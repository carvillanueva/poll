import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PollsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    PollsComponent,
  ]
})
export class PollsPageModule { }
