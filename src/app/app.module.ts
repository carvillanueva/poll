import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventsPageModule } from './eventList/events.module';
import { HomeComponent } from './home/home.component';
import { LoginPageModule } from './login-page/login-page.module';
import { HeaderComponent } from './home/header.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { EviteComponent } from './eventList/evite.component';
import { PollsComponent } from './pollList/polls.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EviteShareComponent } from './eventList/eviteShare.component';
import { EviteResponseComponent } from './eventList/eviteResponse.component';
import { PollsPageModule } from './pollList/polls.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginPageModule,
    EventsPageModule,
    PollsPageModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'loginPage', component: LoginPageComponent },
      { path: 'evitesPage', component: EviteComponent },
      { path: 'pollsPage', component: PollsComponent },
      { path: 'inviteComp', component: EviteComponent },
      { path: 'invitePreview', component: EviteComponent },
      { path: 'eviteShare', component: EviteShareComponent },
      { path: 'eviteResponse', component: EviteResponseComponent },
  ]),
  ],
  exports: [
    HomeComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
