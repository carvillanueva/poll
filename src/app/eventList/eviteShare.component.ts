import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'evite-share',
  styles: [`
    .event-selected {
      background-color: lightgrey;
    }
    /* tr:nth-child(even) {
      background-color: rgba(127, 127, 127, 0.1);
    } */
  
  `],
  template: `
  <div class="container">
    <div class="pt-3 text-center">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a href="/inviteComp" class="nav-link link-dark"><span class="fad fa-envelope"></span> Invitation</a>
        </li>
        <li>
          <a href="invitePreview" class="nav-link link-dark"><span class="fad fa-eye"></span> Preview</a>
        </li>
        <li>
          <a href="/eviteShare" class="nav-link link-dark"><i class="fad fa-share-square"></i> Share</a>
        </li>
        <li>
          <a href="/eviteResponse" class="nav-link link-dark"><i class="fad fa-user-chart"></i> Responses</a>
        </li>
      </ul>
    </div>

    <div class="float-end">
      <button class="btn btn-md btn-outline-success" (click)="emailInvite()"> SHARE</button>
    </div>
    
    <div class="col-xs-12 row">
      <div class="col-xs-12 col-lg-4 p-3">
        <label class="form-label">Select Invite to Send...</label>
        <div class="event">
          <table class="table table-condensed table-borderless table-hover">
            <thead>
              <th>Event</th>
              <th>Date</th>
            </thead>
            <tbody>
              <tr *ngFor="let e of eventList" style="cursor: pointer" (click)="selectEvent(e)" [ngClass]="{'event-selected': e?.id === selectedEvent?.id}">
                <td>{{e.eventName ? e.eventName : 'NO NAME'}}</td>
                <td>{{e.eventDate ? (e.eventDate | date) : 'NO DATE'}}</td>
                <td (click)="deleteEvent();"><i class="fa-duotone fa-trash-can iconclickdelete"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="col-xs-12 col-lg-4 p-3">
        <label class="col-md-4 d-inline-block form-label">Send To:</label>
        <div class="col-md-8 d-inline-flex float-end justify-content-evenly">
          <span (click)="this.addUser = true">Add User <i class="fad fa-user"></i></span>
          <span (click)="this.addNew = true">Create New <i class="fad fa-plus"></i></span>
        </div>
        <div *ngIf="addNew" class="mb-3">
          <input type="text" class="afo-input" style="width:90%" [(ngModel)]="this.newUserEmail.email" placeholder="Add New User Email">
          <span class="iconclickinsert" (click)="addNewUser()"><i class="fad fa-user-check"></i></span>
        </div>  
        <div *ngIf="addUser" class="mb-3">
          <select class="afo-input" style="width:90%">
            <option value="" disabled selected>Select from User Emails</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <span class="iconclickinsert" (click)="addNewUser()"><i class="fad fa-user-check"></i></span>
        </div>
        <div>
          <label>People:</label>
        </div>
      </div>

      <div *ngIf="this.selectedEvent" class="row col-xs-12 col-lg-4 p-3">
        <label class="form-label">Event Details:</label>
        <div class="col-sm-6">
          <label class="form-label"> Event Name</label>
          <input type="text" class="form-control" [(ngModel)]="this.selectedEvent.eventName" (blur)="updateEvent()">
        </div>

        <div class="col-sm-6">
          <label class="form-label"> Occasion</label>
          <input type="text" class="form-control" [(ngModel)]="this.selectedEvent.eventOccasion" (blur)="updateEvent()">
        </div>

        <div class="col-sm-6">
          <label class="form-label"> Date</label>
          <input type="date" class="form-control" [(ngModel)]="this.selectedEvent.eventDate" (blur)="updateEvent()">
        </div>

        <div class="col-sm-6">
          <label class="form-label"> Time</label>
          <input type="time" class="form-control" [(ngModel)]="this.selectedEvent.eventTime" (blur)="updateEvent()">
        </div>

        <div class="col-sm-6">
          <label class="form-label"> Location</label>
          <input type="text" class="form-control" [(ngModel)]="this.selectedEvent.address" (blur)="updateEvent()">
        </div>

        <div class="col-sm-6">
          <label class="form-label">RSVP By:</label>
          <input type="date" class="form-control" [(ngModel)]="this.selectedEvent.rsvpBy" (blur)="updateEvent()">
        </div>

        <div class="col-12">
          <label class="form-label">Event Description</label>
          <textarea row="3" class="form-control" [(ngModel)]="this.selectedEvent.description" (blur)="updateEvent()"></textarea>
        </div>
      </div>


    </div>
    
    

  </div>
  `
})
export class EviteShareComponent implements OnInit {
  public eventList: any[] = [];
  public addNew: boolean = false;
  public addUser: boolean = false;
  public selectedEvent: any;
  public newUserEmail: any = {};



  constructor(
    private apiRequest: ApiPathService,
  ) { }

  ngOnInit() {
    this.getAllEvents();
  }

  public getAllEvents() {
    this.apiRequest.getData('event').subscribe((res:any) => {
      this.eventList = res;
      console.log(this.eventList);
    });
  }

  public selectEvent(event: any) {
    this.selectedEvent = event;
    console.log(this.selectedEvent);
  }

  public addNewUser() {
    console.log(this.newUserEmail);
    this.apiRequest.postData('event/newUser/', this.newUserEmail).subscribe((res:any) => {
      console.log(res);
      this.addNew = false;
      
    });
  }

  public updateEvent() {
    this.apiRequest.putData('event', this.selectedEvent).subscribe();
  }

  public emailInvite() {
    console.log('email sent');
  }

  public deleteEvent() {
    console.log('delete');
  }


}
