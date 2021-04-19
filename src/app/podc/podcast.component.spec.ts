import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcComponent } from './podcast.component';

describe('PodcComponent', () => {
  let component: PodcComponent;
  let fixture: ComponentFixture<PodcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
