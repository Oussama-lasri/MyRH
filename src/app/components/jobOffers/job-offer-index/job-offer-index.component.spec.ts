import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferIndexComponent } from './job-offer-index.component';

describe('JobOfferIndexComponent', () => {
  let component: JobOfferIndexComponent;
  let fixture: ComponentFixture<JobOfferIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOfferIndexComponent]
    });
    fixture = TestBed.createComponent(JobOfferIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
