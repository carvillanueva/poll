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
    .input-container {
      background-color: rgba(0,0,0,.02);
      border-radius: 15px;
      max-width: 1000px;
    }
    /* thanks box */
    .thanks-box {
      background-color: rgba(0,0,0,.02);
      border-radius: 8px;
      -webkit-box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.1); 
      box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.1);
      max-width:600px;
    }
    /* NOTE SECTION  */
    .note {
      padding-top: 50px;
      position: relative;
    }
    .note .container {
      /* background: url("https://static1.squarespace.com/static/5b63d343b105984b697b5c51/t/5cac6fe408522927f4aad8b7/1554804722180/pattern_V5.jpg") repeat-x center center / auto 100% ; */
      background-color: #2e5077;
      max-width: 1200px;
      margin: 0 auto;
      border-radius: 8px;
      box-shadow: 5px 5px 10px 3px rgb(0 0 0 / 15%);
      padding: 55px 40px;
      position: relative;
      z-index: 5;
      font-size: 22px;
    }
    .note .container:after {
      content:"";
      position: absolute;
      top: 20px;
      left: 20px;
      background: white;
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      z-index: -1 ;
    }
    .note .container .texts p {
      max-width: 100%;
      font-size: 21px;
      line-height: 1.8em;
    }
    .note .container span.sub-text {
      font-size: 16px !important;
      width: 100%;
      display: inline-block;
    }
    .note .container .texts .sub-text {
      font-size: 18px;
      line-height: 1.3em;
      display: block;
      margin-bottom: 1em;
    }
    .info-line {
      font-size: 18px;
      margin-left: 15px;
      margin-right: 15px;
    }
    /* NOTE SECTION END */

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

      <div *ngIf="!inviteEdit && !submitConfirm" class="text-center note">
        <div class="container">
          <div class="texts">
            <div>
              <img src="../../assets/images/AFO-Primary Stack_Slate.png" height="175px" width="275px" alt="Arlington Logo"/>
            </div>
            <h2>{{recentEvite?.eventName}}</h2>
            <p>{{recentEvite?.description}}</p>
            <div class="bg-light rounded mx-auto" style="width: fit-content">
              <span class="info-line"><i class="fas fa-map-marker-alt"></i> {{recentEvite?.address}}</span>
              <span class="info-line"><i class="fad fa-clock"></i> {{recentEvite?.eventDate | date}} @ {{recentEvite?.eventTime}}</span>
              <span class="info-line"><i>RSVP BY: </i> {{recentEvite?.rsvpBy | date}}</span>
            </div>
            <span class="sub-text my-4"><span class="pink">*</span>Please respond to the invitation by selected 'Accept' or 'Decline'*</span>
            <span class="sub-text my-4"><span class="pink">*</span>If you have any questions feel free to reach out!</span>
            <button class="btn btn-outline-success btn-md mx-3">Accept</button>
            <button class="btn btn-outline-danger btn-md mx-3">Decline</button>
          </div>
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
