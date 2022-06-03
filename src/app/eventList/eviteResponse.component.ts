import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'evite-response',
  styles: [`
  
  `],
  template: `
  <div class="container">

    <div class="col-12 my-3 text-center ">
      <button class="invite-switch"><a href="/inviteComp"><i class="fad fa-envelope"></i> Invitation</a></button>
      <button class="invite-switch"><a href="invitePreview"><i class="fad fa-eye"></i> Preview</a></button>
      <button class="invite-switch"><a href="/eviteShare"><i class="fad fa-share-square"></i> Share</a></button>
      <button class="invite-switch"><a href="/eviteResponse"><i class="fad fa-user-chart"></i> Responses</a></button>
    </div>
    
    <div class="col-xs-12">
      response
    </div>





  </div>
  `
})
export class EviteResponseComponent implements OnInit {





  constructor(
    private apiRequest: ApiPathService,
  ) { }

  ngOnInit() {
    this.apiRequest.getData('event/response').subscribe();
  }


}
