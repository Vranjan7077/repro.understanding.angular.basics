import { TestBed } from '@angular/core/testing';

import { CacheUserService } from './cache-user.service';

describe('CacheUserService', () => {
  let service: CacheUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
