import { Component, OnInit } from '@angular/core';
import { ApiPathService } from '../pollData.service';

@Component({
  selector: 'evite-response',
  template: `
    response
  `,
  styles: [`
  
  `]
})
export class EviteResponseComponent implements OnInit {





  constructor(
    private apiRequest: ApiPathService,
  ) { }

  ngOnInit() {

  }


}
