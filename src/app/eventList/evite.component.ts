import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'evite-page',
  styles: [
    `
      /* Form Input */
      .form-style-2 {
        padding: 20px 12px 10px 20px;
        font: 13px Arial, Helvetica, sans-serif;
      }
      .form-style-2 label {
        display: block;
        margin: 0px 0px 15px 0px;
      }
      .form-style-2 label > span {
        width: 100px;
        font-weight: bold;
        float: left;
        padding-top: 8px;
        padding-right: 5px;
      }
      .form-style-2 input.input-field {
        width: 48%;
      }
      .form-style-2 input.input-field,
      .form-style-2 .textarea-field {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border: 1px solid #c2c2c2;
        box-shadow: 1px 1px 4px #ebebeb;
        -moz-box-shadow: 1px 1px 4px #ebebeb;
        -webkit-box-shadow: 1px 1px 4px #ebebeb;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        padding: 7px;
        outline: none;
      }
      .form-style-2 .input-field:focus,
      .form-style-2 .textarea-field:focus {
        border: 1px solid #0c0;
      }
      .form-style-2 .textarea-field {
        height: 100px;
        width: 55%;
      }
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
        display: inline-block;
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
      input[type='text'] {
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
      }
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

      .invite-switch {
        font-size: 17px;
        display: inline-block;
        width: 25%;
        text-align: center;
        background: rgba(255, 255, 255, 0.5);
      }
    `,
  ],
  template: `
    <div class="container col-8">
      <button class="invite-switch" (click)="switchView('true')">Invitation</button>
      <button class="invite-switch" (click)="switchView('false')">Preview</button>
      <button class="invite-switch">share</button>
      <button class="invite-switch">Responses</button>
    </div>
  <!-- <button class="btn btn-primary" (click)="submitInvite()">Submit</button> -->
    <div *ngIf="inviteEdit" class="container offset-sm-3 form-style-2">
        <label>
          <span>Event Name <span style="color:red;">*</span></span>
          <input type="text" class="input-field" (ngModel)="data[0].eventName">
        </label>
        <label>
          <span>Occasion</span>
          <input type="text" class="input-field" />
        </label>
        <label>
          <span>Host <span style="color:red;">*</span></span>
          <input type="text" class="input-field" (ngModel)="data.eventHost" />
        </label>
        <label>
          <span>Date & Time <span style="color:red;">*</span></span>
          <input type="datetime-local" class="input-field"/>
        </label>
        <label>
          <span>Address <span style="color:red;">*</span></span>
          <input type="text" class="input-field" (ngModel)="data.address"/>
        </label>
        <label>
          <span>Message <span style="color:red;">*</span></span>
          <textarea class="textarea-field" (ngModel)="data.description"></textarea>
        </label>
        <button class="submit-evite" (click)="submitInvite()">Submit</button>
    </div>

    <div class="container">
      <div *ngIf="!inviteEdit" class="card">
        <section class="col-8 float-start">
          <header class="heading">
            <div class="super-heading">Join us for this cool event!</div>
            <h1 class="title">Invitation</h1>
          </header>

          <address class="party-address">
            <p>
              <i class="fas fa-map-marker-alt"></i> 20<sup>th</sup> St N Ste
              2000, Birmingham, AL
            </p>
            <p>
              <i class="fad fa-phone"></i> (205) 671-8235
            </p>
            <p>
              <i class="fad fa-clock"></i> 7:00 P.M CST
            </p>
          </address>

          <time class="party-date">
            <div class="party-day">18<sup>th</sup></div>
            <div class="party-month">august</div>
          </time>
        </section>
        <!-- column left -->

        <section class="col-4 float-end" style="border-left: solid 2px #454545">
          <form id="theForm">
            <h2>Are you coming?</h2>
            <input
              type="radio"
              name="coming"
              value="yes"
              id="comingYes"
              class="radio-coming--yes"
              checked
            />
            <label for="comingYes" class="label-coming--yes">Yes, of course!</label>
            <input
              type="radio"
              name="coming"
              value="no"
              id="comingNo"
              class="radio-coming--no"
            />
            <label for="comingNo" class="label-coming--no">No, I'm sorry...</label>

            <fieldset class="bringing">
              <h3>Do you bring other people?</h3>
              <input
                type="radio"
                name="bringing"
                id="bringingYes"
                value="yes"
                class="radio-bringing--yes"
                checked
              />
              <label for="bringingYes" class="label-bringing--yes">Yes!</label>
              <div class="is_bringing" id="bringing">
                <h4>Oh, cool! Who else is coming??</h4>
                <p class="subtitle">Bring as many as you like</p>
                <input
                  type="text"
                  name="persons"
                  id="persons"
                  placeholder="Arlington Employee, Spouce, etc."
                />
              </div>
              <input
                type="radio"
                name="bringing"
                value="no"
                id="bringingNo"
                class="radio-bringing--no"
              />
              <label for="bringingNo" class="label-bringing--no"
                >No, I'm the lone ranger</label
              >
            </fieldset>

            <button class="send-card-button" id="theButton">Alrighty!</button>
            <div id="thankyou" class="thank-you"></div>
          </form>
        </section>
        <!-- column right -->
      </div>
    </div>

    <!-- card -->
  `,
})
export class EviteComponent implements OnInit {
  public data: any;
  public inviteEdit: boolean = true;

  constructor(
    private apiRequest: ApiPathService,
  ) {}

  ngOnInit( ) {
   this.loadData();
  }

  public loadData() {
    this.apiRequest.getData('event').subscribe((res: any) => {
      console.log(res);
      this.data = res;
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
    console.log('ete');
    
    this.apiRequest.postData('event' , this.data ).subscribe((res: any) => {
      console.log(res);
    });
  
    ///this.data[0]== needs to be the object that is passed in to update not the whole array
  
  }


}
