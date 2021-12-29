import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { EventListComponent } from '../eventList/events.component';



@NgModule({
  declarations: [
    // HomeComponent,
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // HomeComponent
  ]
})
export class LoginPageModule { }
