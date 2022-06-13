import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'evite-page',
  styles: [
  `
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

    /* thanks box */
    .thanks-box {
      border: solid 1px black;
      background-color: lightgrey;
      border-radius: 8px;
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
      <div class="my-3 col-12 text-center">
          <button class="invite-switch" (click)="switchView('true')"><span class="fad fa-envelope"></span> Invitation</button>
          <button class="invite-switch" (click)="switchView('false')"><span class="fad fa-eye"></span>  Preview</button>
          <button class="invite-switch"><a href="/eviteShare"><i class="fad fa-share-square"></i> Share</a></button>
          <button class="invite-switch"><a href="/eviteResponse"><i class="fad fa-user-chart"></i> Responses</a></button>
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
            <input type="text" class="form-control" placeholder="" [(ngModel)]="newEvent.eventDate" />
          </div>
          <div class="col-sm-6">
            <label class="form-label">Time <span style="color:red;">*</span></label>
            <input type="text" class="form-control" placeholder="" [(ngModel)]="newEvent.eventTime" />
          </div>
          <div class="col-sm-6">
            <label class="form-label">RSVP By <span style="color:red;">*</span></label>
            <input type="text" class="form-control" placeholder="" [(ngModel)]="newEvent.rsvpBy"  />
          </div>
          <div class="col-sm-6">
            <label class="form-label">Location <span style="color:red;">*</span></label>
            <input type="text" class="form-control" placeholder="" [(ngModel)]="newEvent.address" />
          </div>
          <div class="col-sm-12">
            <label class="form-label">Message</label>
            <textarea type="text" class="form-control" rows="4" placeholder="" [(ngModel)]="newEvent.description"></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button (click)="submitInvite()"class=" submit-evitebtn btn-primary btn-lg px-4 me-md-2 fw-bold">Create <i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>

      <!-- SUBMIT THANKS -->
      <div *ngIf="submitConfirm">
        <div class="thanks-box">
          <p>Thanks for submitting your invitation!</p>
          <p>Go to the 'Preview' tab to view your invitation!</p>
          <p>Go to the 'Share' tab to send to your friends and family!</p>
        </div>
      </div>

      <div class="text-center">
        <div *ngIf="!inviteEdit && !submitConfirm" class="card">
          <section class="col-8 float-start" style="border-right: solid 2px #454545">
            <header class="heading">
              <div class="super-heading">{{this.newEvent.eventOccasion}}</div>
              <h1 class="title">{{this.newEvent.eventName}}</h1>
            </header>

            <address class="party-address">
              <p>
                <i class="fas fa-map-marker-alt"></i> {{this.newEvent.address}}
              </p>
              <!-- <p>
                <i class="fad fa-phone"></i> (205) 671-8235
              </p> -->
              <p>
                <i>RSVP BY: </i> {{this.newEvent.rsvpBy | date}}
              </p>
              <p>
                <i class="fad fa-clock"></i> {{this.newEvent.eventTime}}
              </p>
            </address>
            <time class="party-date">
              <div class="party-month">{{this.newEvent.eventDate | date}}</div>
              <!-- <div class="party-month">august</div> -->
            </time>
            <div class="col-4">
              {{this.newEvent.description}}
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
  public submitConfirm: boolean = false;

  constructor(
    private apiRequest: ApiPathService,
  ) {}

  ngOnInit( ) {
    this.loadData();
  }

  public loadData() {
    this.apiRequest.getData('event').subscribe((res: any) => {
      console.log(res);
      this.submitConfirm = false;
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
  id?: string;
  type = 'event';
  customerId?: string;
  eventName?: string;
  eventOccasion?: string;
  eventHost?: string;
  eventDate?: string;
  eventTime?: string;
  description?: string;
  address?: string;
  rsvpBy?: string;
  //UI only 

}
