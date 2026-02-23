import { TestBed } from '@angular/core/testing';

import { PipeCounterService } from './pipe-counter.service';

describe('PipeCounterService', () => {
  let service: PipeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
