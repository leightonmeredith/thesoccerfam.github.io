import { TestBed } from '@angular/core/testing';

import { PodcService } from './podc.service';

describe('PodcService', () => {
  let service: PodcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
