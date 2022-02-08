import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'evite-share',
  template: `
    response
  `,
  styles: [`
  
  `]
})
export class EviteShareComponent implements OnInit {





  constructor(
    private apiRequest: ApiPathService,
  ) { }

  ngOnInit() {

  }


}
