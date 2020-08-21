import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastComponent } from './podcast.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PodcastComponent', () => {
  let component: PodcastComponent;
  let fixture: ComponentFixture<PodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
