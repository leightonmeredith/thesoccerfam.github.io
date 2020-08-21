import { TestBed, fakeAsync, flush, async } from '@angular/core/testing';

import { FamilyRepoService } from './family-repo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockObjects } from 'src/shared/mock-objects.component';
import { of } from 'rxjs';

describe('FamilyRepoService', () => {
  let service: FamilyRepoService;
  let httpTestingController: HttpTestingController;
  let mockObj = new MockObjects();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(FamilyRepoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initializeFamily', () => {
    xit('should call getAll', fakeAsync(() => {
      const s = spyOn(service, 'getAll');

      service.initializeFamily();
      flush();

      expect(s).toHaveBeenCalled();
    }));

    it('should call getAll', () => {
      const mockFamily = mockObj.getDefaultFamilies();
      const s = spyOn(service, 'getAll').and.returnValue(of(mockFamily));

      service.initializeFamily();
      // flush();

      expect(s).toHaveBeenCalled();
    });
  });

  fdescribe('getAll', () => {
    it('should call get with correct url', () => {
      const mockFamily = mockObj.getDefaultFamilies();
      service.getAll().subscribe((data) => {
        expect(data).toEqual(mockFamily);
      });
      const url = 'assets/api/family.json';

      const request = httpTestingController.expectOne(url);
      expect(request.request.method).toEqual('GET');
      request.flush(mockFamily);
      httpTestingController.verify();
    })
  })
});
