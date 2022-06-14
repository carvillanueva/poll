import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'evite-response',
  styles: [`
  
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
