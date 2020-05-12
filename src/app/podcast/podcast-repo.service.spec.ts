import { TestBed } from '@angular/core/testing';

import { PodcastRepoService } from './podcast-repo.service';

describe('PodcastRepoService', () => {
  let service: PodcastRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
