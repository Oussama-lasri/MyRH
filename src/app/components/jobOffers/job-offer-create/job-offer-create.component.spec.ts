import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferCreateComponent } from './job-offer-create.component';

describe('JobOfferCreateComponent', () => {
  let component: JobOfferCreateComponent;
  let fixture: ComponentFixture<JobOfferCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOfferCreateComponent]
    });
    fixture = TestBed.createComponent(JobOfferCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
