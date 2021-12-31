import { TestBed } from '@angular/core/testing';

import { PollDataService } from './pollData.service';

describe('PollDataService', () => {
  let service: PollDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
