import { TestBed } from '@angular/core/testing';

import { PodcastRepoService } from './podcast-repo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PodcastRepoService', () => {
  let service: PodcastRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PodcastRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
