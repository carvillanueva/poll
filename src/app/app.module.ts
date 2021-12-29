import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsPageModule } from './eventList/events.module';
import { HomeComponent } from './home/home.component';
import { LoginPageModule } from './login-page/login-page.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    EventsPageModule
  ],
  exports: [
    HomeComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
