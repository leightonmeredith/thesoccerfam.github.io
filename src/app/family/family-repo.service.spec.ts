import { TestBed } from '@angular/core/testing';

import { FamilyRepoService } from './family-repo.service';

describe('FamilyRepoService', () => {
  let service: FamilyRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
