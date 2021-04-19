import { TestBed } from '@angular/core/testing';

import { SrchService } from './srch.service';

describe('SrchService', () => {
  let service: SrchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
