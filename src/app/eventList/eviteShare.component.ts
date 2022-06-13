import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'evite-share',
  styles: [`
    .event-selected {
      border: solid 1px black;
      background-color: lightgrey;
      border: 8px;
      padding: 3px;
    }
  
  `],
  template: `
  <div class="container">
    
    <div class="col-12 my-3 text-center ">
      <button class="invite-switch"><a href="/inviteComp"><i class="fad fa-envelope"></i> Invitation</a></button>
      <button class="invite-switch"><a href="invitePreview"><i class="fad fa-eye"></i> Preview</a></button>
      <button class="invite-switch"><a href="/eviteShare"><i class="fad fa-share-square"></i> Share</a></button>
      <button class="invite-switch"><a href="/eviteResponse"><i class="fad fa-user-chart"></i> Responses</a></button>
    </div>
    
    <div class="col-xs-12 row">
      <div class="col-xs-12 col-lg-4">
        <label>Select Invite to Send...</label>
        <div class="event">
          <table class="table table-condensed table-borderless table-hover">
            <tr>
              <td>Event</td>
              <td>Date</td>
            </tr>
            <tr *ngFor="let e of eventList" style="cursor: pointer" (click)="selectEvent(e)" [ngClass]="{'event-selected': e.selectedEvent}">
              <td>{{e.eventName ? e.eventName : 'NO NAME'}}</td>
              <td>{{e.eventDate ? (e.eventDate | date) : 'NO DATE'}}</td>
              <td (click)="deleteEvent();"><i class="fa-duotone fa-trash-can"></i></td>
            </tr>
          </table>
        </div>
      </div>
      
      <div class="col-xs-12 col-lg-4">
        <label class="col-md-4 d-inline-block">Send To:</label>
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

      <div *ngIf="this.selectedEvent" class="row col-xs-12 g-2 col-lg-4">
        <label>Event Details:</label>
        <div class="col-sm-6">
          <label class="form-label"> Event Name</label>
          <input type="text" class="form-control" [(ngModel)]="this.selectedEvent.eventName" >
        </div>

        <div class="col-sm-6">
          <label class="form-label"> Occasion</label>
          <input type="text" class="form-control" [(ngModel)]="this.selectedEvent.eventOccasion" >
        </div>

        <div class="col-sm-6">
          <label class="form-label"> Date</label>
          <input type="date" class="form-control" [(ngModel)]="this.selectedEvent.eventDate" >
        </div>

        <div class="col-sm-6">
          <label class="form-label"> Time</label>
          <input type="time" class="form-control" [(ngModel)]="this.selectedEvent.eventTime" >
        </div>

        <div class="col-sm-6">
          <label class="form-label"> Location</label>
          <input type="text" class="form-control" [(ngModel)]="this.selectedEvent.address" >
        </div>

        <div class="col-sm-6">
          <label class="form-label">RSVP By:</label>
          <input type="date" class="form-control" [(ngModel)]="this.selectedEvent.rsvpBy" >
        </div>

        <div class="col-12">
          <label class="form-label">Event Description</label>
          <input type="email" class="form-control" [(ngModel)]="this.selectedEvent.description" >
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
  }

  public addNewUser() {
    console.log(this.newUserEmail);
    this.apiRequest.postData('event/newUser/', this.newUserEmail).subscribe((res:any) => {
      console.log(res);
      this.addNew = false;
      
    });

  }

  public deleteEvent() {
    console.log('delete');
    
  }


}
