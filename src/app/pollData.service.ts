import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPathService {
  private pollApiPath: string = environment.apiPath;

  constructor( private authHttp: HttpClient ) { }

  public getData(url: string) {
    return this.authHttp.get(this.pollApiPath + url);
  }

  public postData(url: string, data: any) {
    return this.authHttp.post(this.pollApiPath + url, data);
  }

  public putData(url: string, data: any) {
    return this.authHttp.put(this.pollApiPath + url, data);
  }

  public deleteData(url:string, data?: any) {
    return this.authHttp.delete(this.pollApiPath + url);
    // this.cloudApiPath + url
  }

}

export class Event {
  constructor(name: string, id: string) {
    this.type = 'event';
    this.eventName = name;
    this.customerId = id;
  }
  public id: string;
  public type: string;
  public customerId: string;
  public eventName: string;
  public eventOccasion: string;
  public eventHost: string;
  public eventDate: string;
  public eventTime: string;
  public description: string;
  public address: string;
  public rsvpBy: string;

}

export class Customer {
  constructor(name: string) {
    this.type = 'customer';
    this.name = name;
  }
  public id: string;
  public type: string;
  public name: string;
  public organization: string;
  public emailAddress: string;
  public password: string;
}

export class Polls {
  constructor() {
    this.type = 'poll';
    this.data = [];
  }
  public id: string;
  public type: string;
  public customerId: string;
  public data: PollQuestions[];
  public pollName: string;
  // public pollItem: string;
  // public pollDate: string;
  // public pollDescription: string;
}

export class PollQuestions {
  public question?: string;
  public answerType?: string;
}


