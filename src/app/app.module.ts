import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EventsPageModule } from './eventList/events.module';
import { HomeComponent } from './home/home.component';
import { LoginPageModule } from './login-page/login-page.module';
import { HeaderComponent } from './home/header.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { EviteComponent } from './eventList/evite.component';
import { PollsComponent } from './eventList/polls.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    EventsPageModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'loginPage', component: LoginPageComponent },
      { path: 'evitesPage', component: EviteComponent },
      { path: 'pollsPage', component: PollsComponent },
  ]),
  ],
  exports: [
    HomeComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
