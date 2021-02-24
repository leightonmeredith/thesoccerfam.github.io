import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyComponent } from './family.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjects } from 'src/shared/mock-objects.component';

describe('FamilyComponent', () => {
  let component: FamilyComponent;
  const mockObj = new MockObjects();
  let fixture: ComponentFixture<FamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FamilyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getBio', () => {
    it('should set selectedMember', () => {
      component.family = mockObj.getDefaultFamilies();
      const mockMember = mockObj.getDefaultFamilies()[0];

      component.getBio(mockMember);

      expect(component.selectedMember).toEqual(mockMember);
    });
  });
});
