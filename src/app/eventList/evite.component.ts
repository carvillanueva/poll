import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';

@Component({
  selector: 'evite-page',
  styles: [`
    .submit-evite {
      border: none;
      padding: 8px 15px 8px 15px;
      background: #ff8500;
      color: #fff;
      box-shadow: 1px 1px 4px #dadada;
      -moz-box-shadow: 1px 1px 4px #dadada;
      -webkit-box-shadow: 1px 1px 4px #dadada;
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
    }
    .submit-evite:hover {
      background: #ea7b00;
      color: #fff;
    }
    .afo-nav-link-active {
      color: white;
      text-decoration: underline;
    }
    /* thanks box */
    .thanks-box {
      background-color: rgba(0,0,0,.02);
      border-radius: 8px;
      -webkit-box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.1); 
      box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.1);
      max-width:600px;
    }

    /* Card Preview */
    .subtitle {
      font-style: italic;
      font-weight: 400;
      font-size: 0.875em;
      color: #898989;
      margin: 0 0 0.25em;
    }
    .card {
      border: 7px solid #454545;
      margin: 25px;
    }
    .heading {
      font-weight: 700;
    }
    .super-heading,
    .title {
      display: inline-block;
      color: #f5f5f5;
      background: #454545;
      text-transform: uppercase;
    }
    .super-heading {
      font-size: 1.75em;
      font-style: italic;
      padding: 0 0.5em 2px 2px;
      margin: 20px 0 2px;
      line-height: 1.25;
    }
    .title {
      margin: 0 0 50px;
      padding-right: 2px;
      font-size: 7.5em;
      line-height: 1;
    }
    .party-address {
      padding: 2px 0;
      font-style: normal;
      text-align: center;
      border-width: 2px 0;
      border-style: solid;
      border-color: #454545;
    }
    .party-address > p {
      display: inline-block;
      margin: 0 1em;
    }
    .party-date {
      display: block;
      /* border-bottom: 2px solid #454545; */
      text-align: center;
      margin: 0 0 0.5em;
    }
    .party-month,
    .party-day {
      display: inline-block;
      vertical-align: baseline;
      font-weight: 700;
    }
    .party-month {
      font-size: 6em;
      margin-left: 0.25em;
    }
    .party-day {
      font-size: 9em;
    }
    .party-day sup {
      font-size: 0.25em;
      top: -2em;
    }
    form {
      padding: 47px 12px;
    }
    input[type='radio'] {
      margin-right: 0.25em;
    }
    .radio-bringing--yes:checked ~ .is_bringing {
      display: block;
    }
    .radio-coming--yes:checked ~ .bringing {
      display: block;
    }
    .label-coming--yes,
    .label-bringing--yes {
      margin-right: 1.5em;
    }
    .bringing {
      display: none;
      border: none;
      padding: 0;
    }
    .is_bringing {
      display: none;
      padding-left: 1.5em;
      border: none;
    }
    /* input[type='text'] {
      width: 100%;
      margin: 0 0 0.5em;
      -webkit-appearance: none;
      border-radius: 0;
      border: 0.0675em solid #898989;
      padding: 0.25em 0.375em;
      color: #454545;
    }
    input[type='text']:disabled {
      color: #898989;
    } */
    .send-card-button {
      display: block;
      margin: 1.5em auto 0;
      border: none;
      background-color: #454545;
      padding: 0.25em 0.5em 0.5em;
      color: #f5f5f5;
      font-size: 1.5em;
    }
    .send-card-button:hover {
      color: tomato;
    }
    .send-card-button.sent {
      pointer-events: none;
    }
    .thank-you {
      text-align: center;
      margin: 1.5em 0 0 0;
    }
    .input-container {
      background-color: rgba(0,0,0,.02);
      border-radius: 15px;
      max-width: 1000px;
    }

  `],
  template: `
    <div class="container">
      <div class="pt-3 text-center">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a (click)="switchView('true')" class="nav-link link-dark"><span class="fad fa-envelope"></span> Invitation</a>
          </li>
          <li>
            <a (click)="switchView('false')" class="nav-link link-dark"><span class="fad fa-eye"></span> Preview</a>
          </li>
          <li>
            <a href="/eviteShare" class="nav-link link-dark"><i class="fad fa-share-square"></i> Share</a>
          </li>
          <li>
            <a href="/eviteResponse" class="nav-link link-dark"><i class="fad fa-user-chart"></i> Responses</a>
          </li>
        </ul>
      </div>

      <div *ngIf="inviteEdit && !submitConfirm" class="row col-xs-12 g-3 input-container mx-auto p-3 my-3">
          <h4>Invitation:</h4>
          <div class="col-sm-12">
            <label class="form-label">Event Name <span style="color:red;">*</span></label>
            <input type="text" class="form-control" placeholder="" [(ngModel)]="newEvent.eventName"  />
          </div>
          <div class="col-sm-6">
            <label class="form-label">Occasion <span style="color:red;">*</span></label>
            <input type="text" class="form-control" placeholder="" [(ngModel)]="newEvent.eventOccasion" />
          </div>
          <div class="col-sm-6">
            <label class="form-label">Host <span style="color:red;">*</span></label>
            <input type="text" class="form-control" placeholder="" [(ngModel)]="newEvent.eventHost"  />
          </div>
          <div class="col-sm-6">
            <label class="form-label">Date <span style="color:red;">*</span></label>
            <input type="date" class="form-control" placeholder="" [(ngModel)]="newEvent.eventDate" />
          </div>
          <div class="col-sm-6">
            <label class="form-label">Time <span style="color:red;">*</span></label>
            <input type="time" class="form-control" placeholder="" [(ngModel)]="newEvent.eventTime" />
          </div>
          <div class="col-sm-6">
            <label class="form-label">RSVP By <span style="color:red;">*</span></label>
            <input type="date" class="form-control" placeholder="" [(ngModel)]="newEvent.rsvpBy"  />
          </div>
          <div class="col-sm-6">
            <label class="form-label">Location <span style="color:red;">*</span></label>
            <input type="text" class="form-control" placeholder="" [(ngModel)]="newEvent.address" />
          </div>
          <div class="col-sm-12">
            <label class="form-label">Message</label>
            <textarea type="text" class="form-control" rows="4" placeholder="" [(ngModel)]="newEvent.description"></textarea>
          </div>
          <div class="">
            <button (click)="submitInvite()"class="submit-evitebtn btn-primary btn-md p-2 fw-bold" [ngClass]="{'disabledbtn': !newEvent.eventName}">Create <i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>

      <!-- SUBMIT THANKS -->
      <div *ngIf="submitConfirm">
        <div class="thanks-box p-3 mx-auto text-center fs-5 mt-3">
          <div>
            <img src="../../assets/images/AFO-Primary Stack_Slate.png" height="175px" width="275px" alt="Arlington Logo"/>
          </div>
          <p>Thanks for submitting your invitation!</p>
          <p>Go to the 'Preview' tab to view your invitation!</p>
          <p>Go to the 'Share' tab to send to your friends and family!</p>
        </div>
      </div>

      <div class="text-center">
        <div *ngIf="!inviteEdit && !submitConfirm" class="card">
          <section class="col-8 float-start" style="border-right: solid 2px #454545">
            <header class="heading">
              <div class="super-heading">{{this.recentEvite.eventOccasion}}</div>
              <h1 class="title">{{this.recentEvite.eventName}}</h1>
            </header>

            <address class="party-address">
              <p>
                <i class="fas fa-map-marker-alt"></i> {{this.recentEvite.address}}
              </p>
              <!-- <p>
                <i class="fad fa-phone"></i> (205) 671-8235
              </p> -->
              <p>
                <i>RSVP BY: </i> {{this.recentEvite.rsvpBy | date}}
              </p>
              <p>
                <i class="fad fa-clock"></i> {{this.recentEvite.eventTime}}
              </p>
            </address>
            <time class="party-date">
              <div class="party-month">{{this.recentEvite.eventDate | date}}</div>
              <!-- <div class="party-month">august</div> -->
            </time>
            <div class="col-4">
              {{this.recentEvite.description}}
            </div>

          </section>

          <section class="col-4 float-end" >
            <form id="theForm">
              <h2>Are you coming?</h2>
              <input
                type="radio"
                name="coming"
                value="yes"
                id="comingYes"
                class="radio-coming--yes"
                checked/>
              <label for="comingYes" class="label-coming--yes">Yes, of course!</label>
              <input
                type="radio"
                name="coming"
                value="no"
                id="comingNo"
                class="radio-coming--no"/>
              <label for="comingNo" class="label-coming--no">No, I'm sorry...</label>

              <fieldset class="bringing">
                <h3>Do you bring other people?</h3>
                <input
                  type="radio"
                  name="bringing"
                  id="bringingYes"
                  value="yes"
                  class="radio-bringing--yes"
                  checked/>
                <label for="bringingYes" class="label-bringing--yes">Yes!</label>
                <div class="is_bringing" id="bringing">
                  <h4>Oh, cool! Who else is coming??</h4>
                  <p class="subtitle">Bring as many as you like</p>
                  <input
                    type="text"
                    name="persons"
                    id="persons"
                    class="afo-input"
                    placeholder="Arlington Employee, Spouce, etc." />
                </div>
                <input
                  type="radio"
                  name="bringing"
                  value="no"
                  id="bringingNo"
                  class="radio-bringing--no"/>
                <label for="bringingNo" class="label-bringing--no">No, I'm the lone ranger</label>
              </fieldset>

              <button class="send-card-button" id="theButton">Alrighty!</button>
              <div id="thankyou" class="thank-you"></div>
            </form>
          </section>
        </div>
      </div>
    </div>

  `,
})
export class EviteComponent implements OnInit {
  public newEvent: newEventInfo = new newEventInfo();
  public inviteEdit: boolean = true;
  public recentEvite: any;
  public submitConfirm: boolean = false;

  constructor(
    private apiRequest: ApiPathService,
    private router: Router
  ) {}

  ngOnInit( ) {
    this.loadData();
    this.submitConfirm = false;
  }

  public loadData() {
    this.apiRequest.getData('event').subscribe((res: any) => {
      console.log(res);

      let last = res.length - 1;
      this.recentEvite = res[last]; 
      console.log(this.recentEvite);
          
    });
  }

  public switchView(view: any) {
    if (view === 'true') {
      this.inviteEdit = true;
    } else {
      this.inviteEdit = false;
    }
  }

  public submitInvite() {
    // this.newEvent = new newEventInfo();
    this.apiRequest.postData('event', this.newEvent).subscribe((res: any) => {
      console.log(res);
      this.submitConfirm = true;
      this.loadData();
    });
  }


}


export class newEventInfo {
  public id?: string;
  public type: string = 'event';
  public customerId?: string;
  public eventName?: string;
  public eventOccasion?: string;
  public eventHost?: string;
  public eventDate?: string;
  public eventTime?: string;
  public description?: string;
  public address?: string;
  public rsvpBy?: string;
}
